'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

type NavLinkProps = {
  title: string;
} & LinkProps;

export function NavLink({ title, ...props }: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    pathname === props.href || pathname.startsWith(`${props.href}/`);

  return (
    <Link {...props}>
      <Button
        className="flex h-max w-full cursor-pointer items-center justify-start gap-3 rounded-none border border-transparent bg-transparent p-0 font-normal text-sm text-zinc-300 hover:bg-transparent hover:text-white data-[current=true]:font-medium data-[current=true]:text-white"
        data-current={isActive}
        variant={isActive ? 'outline' : 'ghost'}
      >
        <span className="text-base">{title}</span>
      </Button>
    </Link>
  );
}
