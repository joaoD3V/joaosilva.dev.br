import type { FunctionComponent } from 'react';
import { routes } from './Header';
import { NavLink } from './NavLink';

export const Menu: FunctionComponent = () => {
  return (
    <nav className="flex h-full flex-col items-center gap-6 lg:flex lg:flex-row">
      {routes.map((route, index) => {
        if (index === 0) {
          return null;
        }

        return (
          <NavLink
            href={routes[index].path}
            key={route.path}
            title={routes[index].title.pt}
          />
        );
      })}
    </nav>
  );
};
