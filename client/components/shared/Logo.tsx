import Image from 'next/image';

type Props = {
  size?: 256 | 64 | 48 | 40 | 32;
  logo?: string;
};

const Logo: React.FC<Props> = ({ size = 64, logo = '/images/logos/light_logo.png' }) => (
  <Image alt="Reactive Resume" src={logo} className="rounded" width={170} height={size} priority />
);

export default Logo;
