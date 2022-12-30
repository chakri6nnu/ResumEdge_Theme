import { cx } from '@emotion/css';
import { darken } from '@mui/material';
import { ThemeConfig } from '@reactive-resume/schema';
import get from 'lodash/get';
import { useMemo } from 'react';

import { useAppSelector } from '@/store/hooks';

import stylesLoc from './Masthead.module.scss';

const Heading: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const theme: ThemeConfig = useAppSelector((state) => get(state.resume.present, 'metadata.theme', {} as ThemeConfig));
  const darkerPrimary = useMemo(() => darken(theme.primary, 0), [theme.primary]);

  return (
    <h3
      className={cx(stylesLoc.nonslider, 'relative -left-4 mb-2 w-[95%] rounded-r py-1.5 pl-4 font-bold uppercase')}
      style={{ color: theme.background, backgroundColor: darkerPrimary }}
    >
      {children}
    </h3>
  );
};

export default Heading;
