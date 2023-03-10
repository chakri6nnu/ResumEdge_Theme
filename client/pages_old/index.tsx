import { DarkMode, LightMode } from '@mui/icons-material';
import { Button, IconButton, NoSsr } from '@mui/material';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Footer from '@/components/shared/Footer';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { FLAG_DISABLE_SIGNUPS } from '@/constants/flags';
import { logout } from '@/store/auth/authSlice';
import { setTheme } from '@/store/build/buildSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setModalState } from '@/store/modal/modalSlice';
import styles from '@/styles/pages/Home.module.scss';

// export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['common', 'modals', 'landing'])),
//   },
// });

const Home: NextPage = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const theme = useAppSelector((state) => state.build.theme);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => dispatch(setModalState({ modal: 'auth.login', state: { open: true } }));
  const handleRegister = () => dispatch(setModalState({ modal: 'auth.register', state: { open: true } }));
  const handleToggle = () => dispatch(setTheme({ theme: theme === 'light' ? 'dark' : 'light' }));
  const handleLogout = () => dispatch(logout());

  return (
    <>
      <NoSsr>
        <div className={styles.buttonWrapper}>
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" passHref>
                <Button>{t<string>('landing.actions.app')}</Button>
              </Link>

              <Button variant="outlined" onClick={handleLogout}>
                {t<string>('landing.actions.logout')}
              </Button>
            </>
          ) : (
            <>
              <Button onClick={handleLogin}>{t<string>('landing.actions.login')}</Button>

              <Button variant="outlined" onClick={handleRegister} disabled={FLAG_DISABLE_SIGNUPS}>
                {t<string>('landing.actions.register')}
              </Button>
            </>
          )}
        </div>
      </NoSsr>
      <main className={styles.container}>
        {/* <div className={styles.header}>
          <div className={styles.logo}>
            <Logo
              size={256}
              logo={theme === 'light' ? '/images/logos/dark_logo.png' : '/images/logos/light_logo.png'}
            />
          </div>
          <NoSsr>
            <div className={styles.buttonWrapper}>
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" passHref>
                    <Button>{t<string>('landing.actions.app')}</Button>
                  </Link>

                  <Button variant="outlined" onClick={handleLogout}>
                    {t<string>('landing.actions.logout')}
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={handleLogin}>{t<string>('landing.actions.login')}</Button>

                  <Button variant="outlined" onClick={handleRegister} disabled={FLAG_DISABLE_SIGNUPS}>
                    {t<string>('landing.actions.register')}
                  </Button>
                </>
              )}
            </div>
          </NoSsr>
        </div> */}
        <footer>
          <div className={styles.version}>
            <Footer className="font-semibold leading-5 opacity-50" />
            <div>v {process.env.appVersion}</div>
          </div>

          <div className={styles.actions}>
            <IconButton onClick={handleToggle}>{theme === 'dark' ? <DarkMode /> : <LightMode />}</IconButton>
            <LanguageSwitcher />
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
