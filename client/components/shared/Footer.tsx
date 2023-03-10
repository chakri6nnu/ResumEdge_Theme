import clsx from 'clsx';
import { Trans, useTranslation } from 'next-i18next';

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx('text-xs', className)}>
      <p>{t<string>('common.footer.license')}</p>

      <p>
        <Trans t={t} i18nKey="common.footer.credit">
          <a href="https://www.resumedge.com/" target="_blank" rel="noreferrer">
            resumedge
          </a>
        </Trans>
      </p>
    </div>
  );
};

export default Footer;
