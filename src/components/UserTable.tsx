import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from "@radix-ui/themes";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
};

type UserTableProps = {
  users: User[];
};

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>City</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Street</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Zipcode</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Website</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map(user => (

          <Table.Row key={user.id} className="even:bg-blue-50">
            <Table.RowHeaderCell><Link to={`/user/${user.id}`} className="text-blue-500 hover:underline">
              {user.name}
            </Link></Table.RowHeaderCell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.address.city}</Table.Cell>
            <Table.Cell>{user.address.street}</Table.Cell>
            <Table.Cell>{user.address.zipcode}</Table.Cell>
            <Table.Cell>{user.phone}</Table.Cell>
            <Table.Cell>{user.website}</Table.Cell>
          </Table.Row>
        ))}

      </Table.Body>
    </Table.Root>

  );
};

export default UserTable;
