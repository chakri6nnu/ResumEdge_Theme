// ** React Imports
import { ReactNode, useContext } from 'react';

// ** Types
import { NavLink } from './../../../@core/layouts/types';
// ** Component Imports
import { AbilityContext } from './../../components/acl/Can';

interface Props {
  navLink?: NavLink;
  children: ReactNode;
}

const CanViewNavLink = (props: Props) => {
  // ** Props
  const { children, navLink } = props;

  // ** Hook
  const ability = useContext(AbilityContext);

  return ability && ability.can(navLink?.action, navLink?.subject) ? <>{children}</> : null;
};

export default CanViewNavLink;
