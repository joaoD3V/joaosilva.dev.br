'use client';

import { type FunctionComponent, useState } from 'react';
import { Button } from '@/components/ui/button';

const languages = [
  {
    code: 'pt-BR',
    title: 'PT (BR)',
  },
  {
    code: 'en',
    title: 'EN',
  },
];

export const SelectLanguage: FunctionComponent = () => {
  const [selectLanguage, setSelectLanguage] = useState(() => languages[0]);

  return (
    <div>
      {languages.map((lang) => (
        <Button
          className={`text-text ${lang.code === selectLanguage.code && 'underline underline-offset-8'} cursor-pointer`}
          key={lang.code}
          onClick={() => setSelectLanguage(lang)}
          variant="link"
        >
          {lang.title}
        </Button>
      ))}
    </div>
  );
};
