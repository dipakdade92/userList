import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchUserById } from '../services/apiService';

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(Number(id)),
    enabled: !!id, // Conditionally enable the query
  });

  if (isLoading) return <div className="text-center text-lg">Loading user details...</div>;
  if (error) return <div className="text-center text-lg text-red-500">Error loading user details.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      {/* Custom Card Layout */}
      <div className="bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-3xl duration-300 ease-in-out">
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 p-6 rounded-t-lg">
          <h1 className="text-4xl font-bold text-white">User Details</h1>
        </div>
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700">Personal Information</h2>
              <p className="text-lg text-gray-800"><span className="font-medium">Name:</span> {data?.name}</p>
              <p className="text-lg text-gray-800"><span className="font-medium">Username:</span> {data?.username}</p>
              <p className="text-lg text-gray-800"><span className="font-medium">Email:</span> {data?.email}</p>
              <p className="text-lg text-gray-800"><span className="font-medium">Phone:</span> {data?.phone}</p>
              <p className="text-lg text-blue-400 hover:text-blue-600 transition duration-200">
                <span className="font-medium">Website:</span> 
                <a href={`https://${data?.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{data?.website}</a>
              </p>
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700">Address</h2>
              <p className="text-lg text-gray-800"><span className="font-medium">Street:</span> {data?.address?.street}</p>
              <p className="text-lg text-gray-800"><span className="font-medium">Suite:</span> {data?.address?.suite}</p>
              <p className="text-lg text-gray-800"><span className="font-medium">City:</span> {data?.address?.city}</p>
              <p className="text-lg text-gray-800"><span className="font-medium">Zipcode:</span> {data?.address?.zipcode}</p>
              <p className="text-lg text-gray-800">
                <span className="font-medium">Geo:</span> Lat: {data?.address?.geo?.lat}, Lng: {data?.address?.geo?.lng}
              </p>
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Company</h2>
            <p className="text-lg text-gray-800"><span className="font-medium">Name:</span> {data?.company?.name}</p>
            <p className="text-lg text-gray-800"><span className="font-medium">Catchphrase:</span> {data?.company?.catchPhrase}</p>
            <p className="text-lg text-gray-800"><span className="font-medium">Business:</span> {data?.company?.bs}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 rounded-b-lg">
          <p className="text-center text-sm text-gray-600">User details fetched from API.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
