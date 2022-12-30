import { css } from '@emotion/css';
import { ThemeConfig } from '@reactive-resume/schema';
import clsx from 'clsx';
import get from 'lodash/get';
import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setResumeState } from '@/store/resume/resumeSlice';
import { getContrastColor } from '@/utils/styles';
import { PageProps } from '@/utils/template';

import { getSectionById } from '../../sectionMap';
import styles from './Resume4.module.scss';
import { MastheadMain, MastheadSidebar } from './widgets/Masthead';
import Section from './widgets/Section';

const Resume4: React.FC<PageProps> = ({ page }) => {
  const dispatch = useAppDispatch();
  const theme: ThemeConfig = useAppSelector((state) => get(state.resume.present, 'metadata.theme', {} as ThemeConfig));
  if (theme.primary == '') {
    dispatch(setResumeState({ path: `metadata.theme.primary`, value: '#ffeb3b' }));
  }
  const isFirstPage = useMemo(() => page === 0, [page]);

  const layout: string[][] = useAppSelector((state) => state.resume.present.metadata.layout[page]);

  const contrast = useMemo(() => getContrastColor(theme.primary), [theme.primary]);
  const color = useMemo(() => (contrast === 'dark' ? theme.text : theme.background), [theme, contrast]);

  return (
    <div className={styles.page}>
      <div className={isFirstPage ? styles.container + ' ' + styles.headImg : styles.container}>
        <div
          className={clsx(styles.sidebar, css(`svg { color: ${color} } --primary-color: ${color}`))}
          style={{ color, backgroundColor: theme.primary }}
        >
          {isFirstPage && <MastheadSidebar />}

          <div className={styles.inner}>{layout[1].map((key) => getSectionById(key, Section))}</div>
        </div>
        <div className={styles.main}>
          <div className={styles.firstPage}>{isFirstPage && <MastheadMain />}</div>

          <div className={styles.inner}>{layout[0].map((key) => getSectionById(key, Section))}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume4;
