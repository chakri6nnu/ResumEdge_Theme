import { css } from '@emotion/css';
import { ThemeConfig } from '@reactive-resume/schema';
import clsx from 'clsx';
import { get } from 'lodash';
import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setResumeState } from '@/store/resume/resumeSlice';
import { PageProps } from '@/utils/template';

import { getSectionById } from '../../sectionMap';
import styles from './Resume1.module.scss';
import { MastheadMain, MastheadSidebar } from './widgets/Masthead';
import Section from './widgets/Section';

const Resume1: React.FC<PageProps> = ({ page }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setResumeState({ path: `metadata.theme.primary`, value: '#eecf07' }));
  }, []);
  const isFirstPage = useMemo(() => page === 0, [page]);
  const layout: string[][] = useAppSelector((state) => state.resume.present.metadata.layout[page]);
  const theme: ThemeConfig = useAppSelector((state) => get(state.resume.present, 'metadata.theme', {} as ThemeConfig));
  const color = '#ffffff';

  return (
    <div className={styles.page} style={{ borderColor: theme.primary }}>
      <div className={isFirstPage ? styles.container + ' ' + styles.headImg : styles.container}>
        <div className={styles.main}>
          <div className={isFirstPage ? styles.firstPage : ''}>{isFirstPage && <MastheadMain />}</div>

          <div className={styles.inner}>{layout[0].map((key) => getSectionById(key, Section))}</div>
        </div>
        <div
          className={clsx(styles.sidebar, css(`svg { color: ${color} } --primary-color: ${color}`))}
          style={{ color, backgroundColor: '#1a141f' }}
        >
          {isFirstPage && <MastheadSidebar />}

          <div className={styles.inner}>{layout[1].map((key) => getSectionById(key, Section))}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume1;
