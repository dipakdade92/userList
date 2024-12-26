import { useState } from 'react';
import { fetchUsers } from '../services/apiService';
import { useBlockHandler } from './blockHandler';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const { checkBlocking, handleBlock, setError, error: blockError } = useBlockHandler();

  const loadUsers = async () => {
    const isBlocked = checkBlocking();
    if (isBlocked) return;

    const retryCount = parseInt(sessionStorage.getItem('retryCount') || '0', 10);

    try {
      const data = await fetchUsers();
      setUsers(data);
      sessionStorage.setItem('retryCount', '0');
      sessionStorage.removeItem('blockTime');
      setError('');
    } catch {
      const newRetryCount = retryCount + 1;
      sessionStorage.setItem('retryCount', newRetryCount.toString());

      if (newRetryCount >= 3) {
        handleBlock(); // Initiate blocking after 3 failed attempts
      } else {
        setError(`Failed to fetch users. Attempt ${newRetryCount} of 3.`);
      }
    }
  };

  return { users, loadUsers, error: blockError || '' };
};
