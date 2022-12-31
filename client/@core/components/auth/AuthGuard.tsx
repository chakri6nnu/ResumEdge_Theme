// ** React Imports
// ** Hooks Import
// ** Next Import
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect } from 'react';

import { useAppSelector } from '@/store/hooks';

interface AuthGuardProps {
  children: ReactNode;
  fallback: ReactElement | null;
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children, fallback } = props;
  const router = useRouter();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (!isLoggedIn) {
        if (router.asPath !== '/') {
          router.replace({
            pathname: '/login',
            query: { returnUrl: router.asPath },
          });
        } else {
          router.replace('/login');
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  );

  if (!isLoggedIn) {
    return fallback;
  }

  return <>{children}</>;
};

export default AuthGuard;
