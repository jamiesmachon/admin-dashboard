import type { FC, PropsWithChildren } from 'react';
import { NavbarSidebarLayoutProps } from '@/interfaces/INavbarSidebarLayoutProps-interface';
import Navbar from '@/components/menus/TopNavbar-Component';
import Sidebar from '@/components/menus/SideNavbar-Component';
import MainContent from './MainContent-Component';

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({ children, isFooter = true }) {
  return (
    <>
      <Navbar />
      <div className="flex items-start pt-16">
        <Sidebar />
        <MainContent isFooter={isFooter}>{children}</MainContent>
      </div>
    </>
  );
};

export default NavbarSidebarLayout;
