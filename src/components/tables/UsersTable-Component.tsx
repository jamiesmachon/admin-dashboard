import { FC } from 'react';
import { Badge, Table } from 'flowbite-react';
import { UserType } from '@/types/TUser.Type';
import DatePicker from '../utils/DatePicker-Component';
import Link from 'next/link';

type UsersTablePropsType = {
  users: UserType[];
};

const UsersTable = ({ users }: UsersTablePropsType) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Users list</h3>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table
                striped={true}
                hoverable={true}
                className="min-w-full divide-y divide-gray-200 dark:divide-gray-600"
              >
                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                  <Table.HeadCell>Avatar</Table.HeadCell>
                  <Table.HeadCell>Username</Table.HeadCell>
                  <Table.HeadCell>Email</Table.HeadCell>
                  <Table.HeadCell>Role</Table.HeadCell>
                  <Table.HeadCell>Capabilities</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                  <Table.HeadCell>Actions</Table.HeadCell>
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  {users.map((user) => (
                    <Table.Row key={user.ID}>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                        {user.avatar ?? 'N/A'}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                        {user.username}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                        {user.email}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                        {user.role}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                        {user.capabilities}
                      </Table.Cell>
                      <Table.Cell className="flex whitespace-nowrap p-4">
                        <Badge color={user.status ? 'success' : 'error'}>{user.status ? 'Active' : 'Inactive'}</Badge>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap p-4">
                        <Link
                          href={`/admin/users/${user.ID}`}
                          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Edit
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <DatePicker />
        <div className="shrink-0"></div>
      </div>
    </div>
  );
};

export default UsersTable;
