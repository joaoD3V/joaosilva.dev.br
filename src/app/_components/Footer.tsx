import { Coffee } from 'lucide-react';
import type { FunctionComponent } from 'react';
import { Separator } from '@/components/ui/separator';
import { dayjs } from '@/lib/dayjs';
import { Logo } from './Logo';
import { Socials } from './Socials';

export const Footer: FunctionComponent = () => {
  return (
    <footer id="contacts">
      <Separator />
      <div className="container mx-auto my-12 flex flex-col items-center justify-between gap-10 md:px-32 lg:items-start xl:flex-row 2xl:px-56">
        <Logo size="large" />

        <div className="mt-8 flex flex-col items-end gap-8 lg:mt-0 lg:gap-6">
          <Socials />

          <span className="flex gap-1 text-base">
            {dayjs().year()}. Feito tomando{' '}
            <Coffee className="size-5" strokeWidth={1.8} /> por João Silva Dev.
          </span>
        </div>
      </div>
    </footer>
  );
};
