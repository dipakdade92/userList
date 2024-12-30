import { render, screen } from '@testing-library/react';
import { act } from 'react';  // Updated import
import UserTable from '../components/UserTable';

describe('UserTable', () => {
  const users = [
    { 
      id: 1, 
      name: "Leanne Graham", 
      email: "Sincere@april.biz",
      username: "Bret", 
      address: { street: "Kulas Light", city: "Gwenborough", zipcode: "92998-3874" },
      phone: "1-770-736-8031 x56442", 
      website: "hildegard.org" 
    },
    { 
      id: 2, 
      name: "Ervin Howell", 
      email: "Shanna@melissa.tv", 
      username: "Antonette", 
      address: { street: "Victor Plains", city: "Wisokyburgh", zipcode: "90566-7771" },
      phone: "010-692-6593 x09125", 
      website: "anastasia.net" 
    }
  ];

  it('renders user table correctly', () => {
    act(() => {
      render(<UserTable users={users} />);
    });

    expect(screen.getByText(users[0].name)).toBeInTheDocument();
    expect(screen.getByText(users[1].name)).toBeInTheDocument();
    expect(screen.getByText(users[0].email)).toBeInTheDocument();
    expect(screen.getByText(users[1].email)).toBeInTheDocument();
  });

  it('renders user links correctly', () => {
    act(() => {
      render(<UserTable users={users} />);
    });

    expect(screen.getByText(users[0].name).closest('a')).toHaveAttribute('href', `/user/${users[0].id}`);
    expect(screen.getByText(users[1].name).closest('a')).toHaveAttribute('href', `/user/${users[1].id}`);
  });
});
