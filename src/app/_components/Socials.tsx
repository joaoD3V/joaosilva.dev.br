import type { FunctionComponent } from 'react';
import { SocialButton } from '../(home)/_components/SocialButton';

export const Socials: FunctionComponent = () => {
  return (
    <div className="mx-auto grid w-max grid-cols-2 gap-3 lg:flex lg:gap-5 ">
      <SocialButton type="github" />
      <SocialButton type="linkedin" />
      <SocialButton type="x" />
      <SocialButton type="instagram" />
      <SocialButton type="youtube" />
    </div>
  );
};
