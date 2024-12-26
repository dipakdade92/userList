import React from 'react';
import { render, screen } from '@testing-library/react';
import UserTable from '../components/UserTable';

describe('UserTable', () => {
  const users = [
    { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
  ];

  it('renders user table correctly', () => {
    render(<UserTable users={users} />);

    expect(screen.getByText(users[0].name)).toBeInTheDocument();
    expect(screen.getByText(users[1].name)).toBeInTheDocument();
    expect(screen.getByText(users[0].email)).toBeInTheDocument();
    expect(screen.getByText(users[1].email)).toBeInTheDocument();
  });

  it('renders user links correctly', () => {
    render(<UserTable users={users} />);

    expect(screen.getByText(users[0].name).closest('a')).toHaveAttribute('href', '/user/1');
    expect(screen.getByText(users[1].name).closest('a')).toHaveAttribute('href', '/user/2');
  });
});
