import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const UserAvatar = () => {
  const { user, signInWithGoogle, logout } = useAuth();

  return (
    <div className="relative">
      {user ? (
        <button
          onClick={logout}
          className="flex items-center space-x-2"
          title="Click to logout"
        >
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User'}
              className="w-8 h-8 rounded-full border-2 border-red-600"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
              {user.displayName?.[0].toUpperCase() || 'U'}
            </div>
          )}
        </button>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default UserAvatar;