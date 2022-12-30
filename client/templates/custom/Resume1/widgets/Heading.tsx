import stylesLoc from './Masthead.module.scss';

const Heading: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <h3 className={stylesLoc.mainTitle}>
      zczc
      <span className={stylesLoc.mainTitleInner}> {children} </span>
    </h3>
  );
};

export default Heading;
