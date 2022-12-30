import { cx } from '@emotion/css';

import stylesLoc from './Masthead.module.scss';
const SidebarHeading: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <h3
      className={cx(stylesLoc.sidebar, 'relative -left-4 mb-2 w-[106%] rounded-r py-1.5 pl-4 font-bold uppercase')}
      style={{ backgroundColor: '#000000' }}
    >
      <span className={stylesLoc.mainTitleInner} style={{ color: '#ffffff' }}>
        {children}
      </span>
    </h3>
  );
};

export default SidebarHeading;
