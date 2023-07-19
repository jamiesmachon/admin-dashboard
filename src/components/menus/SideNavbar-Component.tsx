import type { FC } from 'react';
import { Sidebar, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { HiChartPie, HiClipboard, HiInformationCircle, HiLogout, HiSearch, HiUsers } from 'react-icons/hi';
import useUser from '@/hooks/UseUser-hook';
import { signOut } from 'next-auth/react';

const SideNavbar: FC = function () {
  const { pathname } = useRouter();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname, setCurrentPage]);

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <div className="flex h-full flex-col justify-between py-2">
        <div>
          <form className="pb-3 md:hidden">
            <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
          </form>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/admin"
                icon={HiChartPie}
                className={'/admin' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                href="/admin/users"
                icon={HiUsers}
                className={'/admin/users' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}
              >
                Users list
              </Sidebar.Item>
              <Sidebar.Item onClick={signOut} icon={HiLogout}>
                Sign out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiClipboard}>
                Docs
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInformationCircle}>
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  );
};

export default SideNavbar;
