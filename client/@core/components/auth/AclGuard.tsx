// ** React Imports
import BlankLayout from '@core/layouts/BlankLayout';
// ** Types
import type { ACLObj, AppAbility } from 'configs/acl';
// ** Config Import
import { buildAbilityFor } from 'configs/acl';
// ** Hooks
import { useAuth } from 'hooks/useAuth';
// ** Context Imports
import { AbilityContext } from 'layouts/components/acl/Can';
// ** Next Import
import { useRouter } from 'next/router';
// ** Component Import
import NotAuthorized from 'pages/401';
import { ReactNode, useState } from 'react';

import { useAppSelector } from '@/store/hooks';

interface AclGuardProps {
  children: ReactNode;
  guestGuard: boolean;
  aclAbilities: ACLObj;
}

const AclGuard = (props: AclGuardProps) => {
  // ** Props
  const { aclAbilities, children, guestGuard } = props;

  const [ability, setAbility] = useState<AppAbility | undefined>(undefined);

  // ** Hooks
  const auth = useAuth();
  const router = useRouter();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  // If guestGuard is true and user is not logged in or its an error page, render the page without checking access
  if (guestGuard || router.route === '/404' || router.route === '/500' || router.route === '/') {
    return <>{children}</>;
  }

  // User is logged in, build ability for the user based on his role
  if (isLoggedIn && !ability) {
    setAbility(buildAbilityFor('admin', aclAbilities.subject));
  }

  // Check the access of current user and render pages
  if (ability && ability.can(aclAbilities.action, aclAbilities.subject)) {
    return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>;
  }

  // Render Not Authorized component if the current user has limited access
  return (
    <BlankLayout>
      <NotAuthorized />
    </BlankLayout>
  );
};

export default AclGuard;
