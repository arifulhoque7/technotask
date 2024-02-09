import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
  if (!Array.isArray(users) || users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {users.map(user => (
        <Link to={`/user/${user.id}`} key={user.id}>
          <div className="bg-gray-100 p-4 rounded-md shadow-md transition duration-500 ease-in-out transform hover:scale-105">
            <img src={user.image} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UserList;
