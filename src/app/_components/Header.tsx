import type { FunctionComponent } from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { SelectLanguage } from './SelectLanguage';
import { Sidebar } from './Sidebar';

export const routes = [
  {
    path: '/',
    title: {
      pt: 'Inicial',
      en: 'Home',
    },
  },
  {
    path: '/#about',
    title: {
      pt: 'Sobre',
      en: 'About',
    },
  },
  {
    path: '/projects',
    title: {
      pt: 'Projetos',
      en: 'Projects',
    },
  },
  {
    path: '/blog',
    title: {
      pt: 'Blog',
      en: 'Blog',
    },
  },
  {
    path: '/#contacts',
    title: {
      pt: 'Contatos',
      en: 'Contacts',
    },
  },
];

export const Header: FunctionComponent = () => {
  return (
    <header className="h-16 pt-8 lg:h-20">
      <div className="container mx-auto flex h-full flex-row-reverse items-center justify-between px-4 md:px-32 lg:flex-row 2xl:px-56">
        <Logo />

        <Sidebar />

        <div className="hidden lg:block">
          <Menu />
        </div>

        <div className="hidden lg:block">
          <SelectLanguage />
        </div>
      </div>
    </header>
  );
};
