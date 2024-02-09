// UserDetailsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetailsPage = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  // const userId = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/user/${id}`);
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">User Details</h1>
      {user && (
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <img src={user.image} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetailsPage;
