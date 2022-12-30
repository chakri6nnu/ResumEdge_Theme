import stylesLoc from './Masthead.module.scss';

const SidebarHeading: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <h3 className={stylesLoc.mainTitle}>
      <span className={stylesLoc.mainTitleInner}> {children} </span>
    </h3>
  );
};

export default SidebarHeading;
