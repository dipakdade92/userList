import { useState, useEffect } from 'react';

export const useBlockHandler = () => {
  const [blockedUntil, setBlockedUntil] = useState<number | null>(null);
  const [error, setError] = useState('');

  const checkBlocking = () => {
    const retryCount = parseInt(sessionStorage.getItem('retryCount') || '0', 10);
    const blockTime = parseInt(sessionStorage.getItem('blockTime') || '0', 10);
    const currentTime = Date.now();

    if (retryCount >= 3 && blockTime > currentTime) {
      const remainingTime = blockTime - currentTime;
      setBlockedUntil(blockTime);
      setError(`You can try again in ${Math.ceil(remainingTime / 1000)} seconds.`);
      return true; // Indicates the request is blocked
    }

    return false; // Indicates the request is allowed
  };

  const handleBlock = () => {
    const blockTime = Date.now() + 15 * 1000; // 15 seconds block time
    sessionStorage.setItem('blockTime', blockTime.toString());
    setBlockedUntil(blockTime);
    setError('You have reached the refresh limit (3 times). Please wait 15 seconds.');
  };

  useEffect(() => {
    if (blockedUntil) {
      const timer = setInterval(() => {
        const currentTime = Date.now();
        const remainingTime = blockedUntil - currentTime;

        if (remainingTime <= 0) {
          sessionStorage.setItem('retryCount', '0');
          sessionStorage.removeItem('blockTime');
          setBlockedUntil(null);
          setError('You can refresh the page to fetch the user list again.');
          clearInterval(timer);
        } else {
          setError(`You can try again in ${Math.ceil(remainingTime / 1000)} seconds.`);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [blockedUntil]);

  return { checkBlocking, handleBlock, setError, error };
};
