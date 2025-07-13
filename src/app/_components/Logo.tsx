import Image from 'next/image';
import Link from 'next/link';
import type { FunctionComponent } from 'react';

import logoImg from '@/assets/logo.svg';

type LogoProps = {
  size?: 'normal' | 'large';
};

export const Logo: FunctionComponent<LogoProps> = ({ size = 'normal' }) => {
  return (
    <Link href="/">
      <Image
        alt="João Silva Dev logo"
        className={`${size === 'normal' ? 'w-[100px] lg:w-[120px]' : 'w-[150px] lg:w-[250px]'}`}
        src={logoImg}
      />
    </Link>
  );
};
