import { NextPage } from 'next';
import { Button, Card } from 'flowbite-react';
import useUser from '@/hooks/UseUser-hook';
import LoadingSpinner from '@/components/loading/LoadingSpinner-Component';
import NavbarSidebarLayout from '@/components/layouts/NavbarSidebarLayout-Component';

const DashboardPage: NextPage = () => {
  const { user, isLoading } = useUser();

  if (isLoading) return <LoadingSpinner title="Loading user, please wait..." />;

  return (
    <NavbarSidebarLayout>
      <div className="px-4 pt-6">Welcome {user?.username}</div>
      <div className="px-4 pt-6">
        <h2>THIS CAN BE A LIST OF ALL THE APPS AND WEBSITES H&H OWN / MANAGE</h2>
        <Card horizontal imgSrc="/images/products/apple-imac-1.png">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </p>
        </Card>
      </div>
    </NavbarSidebarLayout>
  );
};

export default DashboardPage;
