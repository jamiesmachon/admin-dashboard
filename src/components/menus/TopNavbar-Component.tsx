import type { FC } from 'react';
import { DarkThemeToggle, Navbar } from 'flowbite-react';
import Image from 'next/image';

const TopNavbar: FC = function () {
  return (
    <Navbar fluid>
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Navbar.Brand href="/">
              <Image alt="" src="/logo.png" width={50} height={50} className="mr-3" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">HOROS</span>
            </Navbar.Brand>
          </div>
          <div className="flex items-center gap-3">
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default TopNavbar;
