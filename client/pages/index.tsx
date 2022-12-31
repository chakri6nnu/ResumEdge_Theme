// ** React Imports
// ** Next Import
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAppSelector } from '@/store/hooks'

// ** Spinner Import
import Spinner from '../@core/components/spinner'
// ** Hook Imports


const Home = () => {
  // ** Hooks
  const router = useRouter()
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      // Redirect user to Home URL
      router.replace('/dashboard')
    }else{
      router.replace('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner sx={{ height: '100%' }} />
}

export default Home
