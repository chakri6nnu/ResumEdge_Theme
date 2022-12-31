// ** React Imports
// ** Config Imports
import '../configs/i18n'
// ** Fake-DB Import
//import '../@fake-db'
// ** Prismjs Styles
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'
import '../iconify-bundle/icons-bundle-react'

import env from '@beam-australia/react-env'
import DayjsAdapter from '@date-io/dayjs';
// ** Global css styles
// import '../../styles/globals.css'
import type { EmotionCache } from '@emotion/cache'
// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { GoogleOAuthProvider } from '@react-oauth/google'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
// ** Loader Import
import NProgress from 'nprogress'
import { ReactNode } from 'react'
// ** Third Party Import
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import queryClient from '@/services/react-query';
// ** Store Imports
import store, { persistor } from '@/store/index';

import AclGuard from '../@core/components/auth/AclGuard'
import AuthGuard from '../@core/components/auth/AuthGuard'
import GuestGuard from '../@core/components/auth/GuestGuard'
// ** Spinner Import
import Spinner from '../@core/components/spinner'
import WindowWrapper from '../@core/components/window-wrapper'
import { SettingsConsumer, SettingsProvider } from '../@core/context/settingsContext'
// ** Styled Components
import ReactHotToast from '../@core/styles/libs/react-hot-toast'
import ThemeComponent from '../@core/theme/ThemeComponent'
// ** Utils Imports
import { createEmotionCache } from '../@core/utils/create-emotion-cache'
import { defaultACLObj } from '../configs/acl'
import themeConfig from '../configs/themeConfig'
// ** Contexts
import { AuthProvider } from '../context/AuthContext'
// ** Component Imports
import UserLayout from '../layouts/UserLayout'
import ModalWrapper from '../modals'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

type GuardProps = {
  authGuard: boolean
  guestGuard: boolean
  children: ReactNode
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const contentHeightFixed = Component.contentHeightFixed ?? false
  const getLayout =
    Component.getLayout ?? (page => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>)

  const setConfig = Component.setConfig ?? undefined

  const authGuard = Component.authGuard ?? true

  const guestGuard = Component.guestGuard ?? false

  const aclAbilities = Component.acl ?? defaultACLObj
  console.log(env('GOOGLE_CLIENT_ID'));
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
          <meta
            name='description'
            content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
          />
          <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template' />
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>

        <AuthProvider>
        <LocalizationProvider dateAdapter={DayjsAdapter}>
        <PersistGate loading={null} persistor={persistor}>
          <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
            <SettingsConsumer>
          
              {({ settings }) => {
                return (
                  <GoogleOAuthProvider clientId={env('GOOGLE_CLIENT_ID')}>
                    <QueryClientProvider client={queryClient}>
                      <ThemeComponent settings={settings}>
                        <WindowWrapper>
                        <ModalWrapper />
                          <Guard authGuard={authGuard} guestGuard={guestGuard}>
                            <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard}>
                              {getLayout(<Component {...pageProps} />)}
                            </AclGuard>
                          </Guard>
                        </WindowWrapper>
                        <ReactHotToast>
                          <Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
                        </ReactHotToast>
                      </ThemeComponent>
                    </QueryClientProvider>
                  </GoogleOAuthProvider>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
          </PersistGate>
          </LocalizationProvider>
        </AuthProvider>
      </CacheProvider>
    </Provider>
  )
}

export default App
