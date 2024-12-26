import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/apiService';

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'], // Unique key for this query
    queryFn: fetchUsers, // Function to fetch users
    retry: 3,            // Retry fetching on failure
    refetchOnWindowFocus: false, // Do not refetch on window focus
  });
};
