// Import necessary libraries and modules
import { render, screen } from '@testing-library/react';
import UserDetailsPage from '../pages/UserDetailsPage'; // Adjust the import path based on your project structure
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

// Mock the API service
import { fetchUserById } from '../services/apiService'; 

jest.mock('../services/apiService', () => ({
  fetchUserById: jest.fn(),
}));

const queryClient = new QueryClient();

describe('UserDetailsPage', () => {
  it('should match the snapshot', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <UserDetailsPage />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(screen).toMatchSnapshot();
  });

  it('should display loading message when fetching data', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <UserDetailsPage />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(screen.getByText(/Loading user details.../i)).toBeInTheDocument();
  });

  it('should display error message when API call fails', async () => {
    // fetchUserById.mockRejectedValueOnce(new Error('Error fetching user'));

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <UserDetailsPage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(await screen.findByText(/Error loading user details./i)).toBeInTheDocument();
  });

  it('should display user details correctly', async () => {
    const mockUserData = {
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      website: 'www.johndoe.com',
      address: {
        street: '123 Main St',
        suite: 'Apt 4B',
        city: 'Anytown',
        zipcode: '12345',
        geo: {
          lat: '40.7128',
          lng: '-74.0060',
        },
      },
      company: {
        name: 'Doe Inc.',
        catchPhrase: 'Innovate with us',
        bs: 'Web Development',
      },
    };

    // fetchUserById.mockResolvedValueOnce(mockUserData);

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <UserDetailsPage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(await screen.findByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Username: johndoe/i)).toBeInTheDocument();
    expect(screen.getByText(/Email: johndoe@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone: 123-456-7890/i)).toBeInTheDocument();
    expect(screen.getByText(/Website: www.johndoe.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Street: 123 Main St/i)).toBeInTheDocument();
    expect(screen.getByText(/Suite: Apt 4B/i)).toBeInTheDocument();
    expect(screen.getByText(/City: Anytown/i)).toBeInTheDocument();
    expect(screen.getByText(/Zipcode: 12345/i)).toBeInTheDocument();
    expect(screen.getByText(/Lat: 40.7128, Lng: -74.0060/i)).toBeInTheDocument();
    expect(screen.getByText(/Company: Doe Inc./i)).toBeInTheDocument();
    expect(screen.getByText(/Catchphrase: Innovate with us/i)).toBeInTheDocument();
    expect(screen.getByText(/Business: Web Development/i)).toBeInTheDocument();
  });
});
