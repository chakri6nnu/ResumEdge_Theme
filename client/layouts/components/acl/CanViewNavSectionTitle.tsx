// ** React Imports
import { ReactNode, useContext } from 'react';

// ** Types
import { NavSectionTitle } from './../../../@core/layouts/types';
// ** Component Imports
import { AbilityContext } from './../../components/acl/Can';

interface Props {
  children: ReactNode;
  navTitle?: NavSectionTitle;
}

const CanViewNavSectionTitle = (props: Props) => {
  // ** Props
  const { children, navTitle } = props;

  // ** Hook
  const ability = useContext(AbilityContext);

  return ability && ability.can(navTitle?.action, navTitle?.subject) ? <>{children}</> : null;
};

export default CanViewNavSectionTitle;
