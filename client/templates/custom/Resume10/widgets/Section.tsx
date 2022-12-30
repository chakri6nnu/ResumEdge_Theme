import { cx } from '@emotion/css';
import { Email, Link, Phone } from '@mui/icons-material';
import { ListItem, Section as SectionType, ThemeConfig } from '@reactive-resume/schema';
import clsx from 'clsx';
import get from 'lodash/get';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import { useMemo } from 'react';

import Markdown from '@/components/shared/Markdown';
import { useAppSelector } from '@/store/hooks';
import { SectionProps } from '@/templates/sectionMap';
import DataDisplay from '@/templates/shared/DataDisplay';
import { formatDateString } from '@/utils/date';
import { addHttp, parseListItemPath } from '@/utils/template';

import stylesLoc from './Masthead.module.scss';
import styles from './Section.module.scss';

const Section: React.FC<SectionProps> = ({
  path,
  titlePath = 'title',
  subtitlePath = 'subtitle',
  headlinePath = 'headline',
  keywordsPath = 'keywords',
}) => {
  const section: SectionType = useAppSelector((state) => get(state.resume.present, path, {} as SectionType));
  const theme: ThemeConfig = useAppSelector((state) => get(state.resume.present, 'metadata.theme', {} as ThemeConfig));
  const layout: string[][][] = useAppSelector((state) => get(state.resume.present, 'metadata.layout'));

  const sectionId = useMemo(() => section.id || path.replace('sections.', ''), [path, section]);
  const isSidebarSection = useMemo(() => layout.some((row) => row[1].includes(sectionId)), [layout, sectionId]);

  if (!section.visible) return null;

  if (isArray(section.items) && isEmpty(section.items)) return null;
  return (
    <section id={`Resume10_${sectionId}`}>
      <h3 className={stylesLoc.mainTitle}>
        <span
          style={{ backgroundColor: isSidebarSection ? theme.primary : '#ffffff' }}
          className={stylesLoc.mainTitleInner}
        >
          {section.name}
        </span>
      </h3>
      <div
        className={clsx('grid items-start gap-4', { invert: isSidebarSection })}
        style={{ gridTemplateColumns: `repeat(${section.columns}, minmax(0, 1fr))` }}
      >
        {section.items.map((item: ListItem) => {
          const id = item.id,
            title = parseListItemPath(item, titlePath),
            subtitle = parseListItemPath(item, subtitlePath),
            headline = parseListItemPath(item, headlinePath),
            keywords: string[] = get(item, keywordsPath),
            url: string = get(item, 'url', ''),
            level: string = get(item, 'level', ''),
            phone: string = get(item, 'phone', ''),
            email: string = get(item, 'email', ''),
            summary: string = get(item, 'summary', ''),
            levelNum: number = get(item, 'levelNum', 0),
            date = formatDateString(get(item, 'date', ''), 'MM/YYYY');

          return (
            <div key={id} id={id} className="grid gap-1">
              {sectionId.includes('work') ? (
                <>
                  <article className={cx(styles.duration, styles.timeline)}>
                    <div className={styles.timePeriod}>{date}</div>
                    <div className={styles.ritDetails}>
                      <div className={styles.header}>
                        <div className={styles.titleOuter}>
                          <h3 className={styles.title}>{title}</h3>
                          <h6 className={styles.subTitle}>{subtitle}</h6>
                        </div>
                      </div>
                      <div className={cx(styles.description, styles.listOutside)}>
                        {summary && <Markdown className={clsx({ invert: isSidebarSection })}>{summary}</Markdown>}
                      </div>
                    </div>
                  </article>
                </>
              ) : (
                <>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      {title && <span className={clsx('font-semibold', { invert: isSidebarSection })}>{title}</span>}
                      {subtitle && (
                        <span className={clsx('opacity-100', { invert: isSidebarSection })}>{subtitle}</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-1 text-right text-xs">
                      {date && <div className={clsx('opacity-100', { invert: isSidebarSection })}>({date})</div>}
                      {headline && (
                        <span className={clsx('opacity-100', { invert: isSidebarSection })}>{headline}</span>
                      )}
                    </div>
                  </div>
                  {(level || levelNum > 0) && (
                    <div className="grid gap-1">
                      {/* {level && <span className={clsx('opacity-100', { invert: isSidebarSection })}>{level}</span>} */}
                      {levelNum > 0 && (
                        <div className="flex">
                          {Array.from(Array(5).keys()).map((_, index) => (
                            <div
                              key={index}
                              className="mr-2 h-3 w-3 rounded-full border"
                              style={{
                                borderColor: isSidebarSection ? 'var(--text-color)' : 'var(--primary-color)',
                                backgroundColor:
                                  levelNum / (10 / 5) > index
                                    ? isSidebarSection
                                      ? 'var(--text-color)'
                                      : 'var(--primary-color)'
                                    : '',
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {summary && <Markdown className={clsx({ invert: isSidebarSection })}>{summary}</Markdown>}
                  {url && (
                    <DataDisplay
                      className={clsx('opacity-100', { invert: isSidebarSection })}
                      icon={<Link />}
                      link={addHttp(url)}
                    >
                      {url}
                    </DataDisplay>
                  )}
                  {keywords && (
                    <span className={clsx('opacity-100', { invert: isSidebarSection })}>{keywords.join(', ')}</span>
                  )}
                  {(phone || email) && (
                    <div className="grid gap-1">
                      {phone && (
                        <DataDisplay
                          className={clsx('opacity-100', { invert: isSidebarSection })}
                          icon={<Phone />}
                          link={`tel:${phone}`}
                        >
                          {phone}
                        </DataDisplay>
                      )}

                      {email && (
                        <DataDisplay
                          className={clsx('opacity-100', { invert: isSidebarSection })}
                          icon={<Email />}
                          link={`mailto:${email}`}
                        >
                          {email}
                        </DataDisplay>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
