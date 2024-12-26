export const fetchUsers = async (page: number, pageSize: number): Promise<any[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${pageSize}`);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
};


  export const fetchUserById = async (id: number): Promise<any> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user details');
    return response.json();
  };
  