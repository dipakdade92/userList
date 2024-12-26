import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserDetailsPage from '../pages/UserDetailsPage';
import { fetchUserById } from '../services/apiService';
jest.mock('../services/apiService');

const queryClient = new QueryClient();

const mockUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: { lat: "-37.3159", lng: "81.1496" },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

describe('UserDetailsPage', () => {
  it('renders user details correctly', async () => {
    (fetchUserById as jest.MockedFunction<typeof fetchUserById>).mockResolvedValue(mockUser);

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <UserDetailsPage />
        </Router>
      </QueryClientProvider>
    );

    await waitFor(() => expect(screen.getByText(mockUser.name)).toBeInTheDocument());
    expect(screen.getByText(mockUser.username)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
  });

  it('renders error state on fetch failure', async () => {
    (fetchUserById as jest.Mock).mockRejectedValue(new Error('Failed to fetch user details'));

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <UserDetailsPage />
        </Router>
      </QueryClientProvider>
    );

    await waitFor(() => expect(screen.getByText(/error loading user details/i)).toBeInTheDocument());
  });
});
