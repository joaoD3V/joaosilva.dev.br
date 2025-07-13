import type { FunctionComponent } from 'react';

type PageTitleProps = {
  title: string;
};

export const PageTitle: FunctionComponent<PageTitleProps> = ({ title }) => {
  return <h4 className="font-medium font-title text-lg">../JS/{title}</h4>;
};
