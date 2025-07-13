'use client';

import { PanelLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { SocialButton } from '../(home)/_components/SocialButton';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { SelectLanguage } from './SelectLanguage';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: necessary
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger className="flex lg:hidden">
        <PanelLeft className="size-8" strokeWidth={1.2} />
      </SheetTrigger>
      <SheetContent className="w-[256px] bg-main" side="left">
        <SheetHeader className="flex w-full items-center justify-center gap-5 border-muted-foreground border-b-[0.5px] p-4">
          <SheetTitle className="sr-only">Sidebar</SheetTitle>
          <Logo />
          <SelectLanguage />
        </SheetHeader>
        <div className="my-2 flex flex-col gap-2">
          <Menu />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 border-text border-t-[0.5px] py-5">
          <SocialButton type="github" />
          <SocialButton type="linkedin" />
          <SocialButton type="x" />
          <SocialButton type="instagram" />
          <SocialButton type="youtube" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
