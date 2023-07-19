import { FC, PropsWithChildren } from 'react';
import { NavbarSidebarLayoutProps } from '@/interfaces/INavbarSidebarLayoutProps-interface';
import MainContentFooter from './MainContentFooter-Component';

const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({ children, isFooter }) {
  return (
    <main className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
      {children}
      {isFooter && (
        <div className="mx-4 mt-4">
          <MainContentFooter />
        </div>
      )}
    </main>
  );
};

export default MainContent;
