'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error.message}</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-200">
      {user ? (
        <div className="md:flex items-center gap-6">
          <div className="md:shrink-0 flex justify-center">
            {user.picture ? (
              <Image
                className="h-24 w-24 rounded-full object-cover border-2 border-amber-500"
                src={user.picture}
                alt={user.name || 'User profile'}
                width={96}
                height={96}
              />
            ) : (
              <div className="h-24 w-24 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-2xl font-bold">
                {user.name?.[0] || 'U'}
              </div>
            )}
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            
            <div className="pt-4">
              <a 
                href="/auth/logout" 
                className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors shadow-sm"
              >
                Log Out
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">You are not logged in</h2>
          <p className="text-gray-500 mb-6">Please log in to view your profile details.</p>
          <a 
            href="/auth/login" 
            className="bg-[#666555] text-white px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all"
          >
            Log In Now
          </a>
        </div>
      )}
    </div>
  );
};

export default Profile;