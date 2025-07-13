'use client';

import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react';
import type { FunctionComponent } from 'react';
import { Button } from '@/components/ui/button';

type Social = 'github' | 'linkedin' | 'instagram' | 'youtube' | 'x';

const github = {
  icon: GithubLogoIcon,
  title: 'Github',
  url: 'https://github.com/joaod3v',
};

const linkedin = {
  icon: LinkedinLogoIcon,
  title: 'LinkedIn',
  url: 'https://linkedin.com/in/joaosilvadev',
};

const instagram = {
  icon: InstagramLogoIcon,
  title: 'Instagram',
  url: 'https://www.instagram.com/joaosilva.dev',
};

const x = {
  icon: XLogoIcon,
  title: 'X',
  url: 'https://twitter.com/joaosilvadev',
};

const youtube = {
  icon: YoutubeLogoIcon,
  title: 'YouTube',
  url: 'https://www.youtube.com/@joaosilvadev',
};

const socials = {
  github,
  linkedin,
  instagram,
  youtube,
  x,
};

export const SocialButton: FunctionComponent<{ type: Social }> = ({ type }) => {
  const Icon = socials[type].icon;

  return (
    <a href={socials[type].url} target="_blank">
      <Button className="!p-3 lg:!p-5 cursor-pointer rounded-full border border-accent-light font-medium italic transition-all hover:shadow hover:shadow-accent-light">
        <Icon className="size-5 lg:size-6" /> {socials[type].title}
      </Button>
    </a>
  );
};
