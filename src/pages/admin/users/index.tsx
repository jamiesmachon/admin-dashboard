import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { getApiUrl } from '@/utils/ApiFunctions-Util';
import { UserType } from '@/types/TUser.Type';
import NavbarSidebarLayout from '@/components/layouts/NavbarSidebarLayout-Component';
import UsersTable from '@/components/tables/UsersTable-Component';

type UsersPagePropsType = {
  users: UserType[];
};

const UsersPage = ({ users }: UsersPagePropsType) => {
  return (
    <NavbarSidebarLayout>
      <UsersTable users={users} />
    </NavbarSidebarLayout>
  );
};

export const getServerSideProps: GetServerSideProps<UsersPagePropsType> = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Fetch the list of users from your API or database
  const res = await fetch(getApiUrl('users'), {
    headers: {
      Authorization: `Bearer ${session.user?.accessToken}`,
    },
  });
  const users: UserType[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
