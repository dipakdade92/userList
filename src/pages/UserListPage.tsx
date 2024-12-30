import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import UserTable from '../components/UserTable';
import { useFetchUsers } from '../utils/fetchHandler';
// import ErrorImage from '../assets/error.svg';

const UserListPage: React.FC = () => {
  const { users, loadUsers, error } = useFetchUsers();
  const [page, setPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    loadUsers();
  }, []);

  const totalPages = Math.ceil(users.length / pageSize);
  const paginatedData = users.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="font-[sans-serif] overflow-x-auto w-[100%]">
      {error ? (
        <div className="flex flex-col items-center py-10">
          <div className="font-bold">{error}</div>
          {/* <img className='w-[200%]' src={ErrorImage} alt={"this is an error message"} /> */}
        </div>
      ) : users.length > 0 ? (
        <>
          <div className="flex justify-center items-center text-lg font-bold text-black py-6 md:py-8">
             <h1 className="text-2xl sm:text-3xl md:text-4xl">User List</h1>
          </div>
          <UserTable users={paginatedData} />
          <Pagination currentPage={page} onPageChange={setPage} totalPages={totalPages} />
        </>
      ) : (
        <div className="flex flex-col items-center py-10">
          <div className="text-gray-500 font-bold">No users available. Please try again.</div>
        </div>
      )}
    </div>
  );
};

export default UserListPage;
