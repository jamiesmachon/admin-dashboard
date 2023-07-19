import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { getApiUrl } from '@/utils/ApiFunctions-Util';
import { UserType } from '@/types/TUser.Type';
import NavbarSidebarLayout from '@/components/layouts/NavbarSidebarLayout-Component';
import { log } from 'console';

type UserPagePropsType = {
  user: UserType;
};

const UserPage = ({ user }: UserPagePropsType) => {

  console.log('user',user);

  return (
    <NavbarSidebarLayout>
     {user.username}
    </NavbarSidebarLayout>
  );
};

export const getServerSideProps: GetServerSideProps<UserPagePropsType> = async (context) => {
  const session = await getSession(context);
  const params = context.params;

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Fetch the list of users from your API or database
  const res = await fetch(getApiUrl('users/' + params?.id), {
    headers: {
      Authorization: `Bearer ${session.user?.accessToken}`,
    },
  });
  const user: UserType = await res.json();
  
  return {
    props: {
      user,
    },
  };
};

export default UserPage;
