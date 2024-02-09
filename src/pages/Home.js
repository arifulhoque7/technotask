// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import SearchInput from '../components/SearchInput';
import SortInput from '../components/SortInput';


const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(
        user =>
          user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, users]);

  useEffect(() => {
    if (sortOption === '') {
      setFilteredUsers(users); 
    } else {
      const sorted = [...filteredUsers].sort((a, b) =>
        a[sortOption]?.localeCompare(b[sortOption])
      );
      setFilteredUsers(sorted);
    }
  }, [sortOption, users]);


  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleSort = event => {
    setSortOption(event.target.value);
  };

  const handleAddUser = newUser => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">User List</h1>
      <div className="flex justify-between my-4">
        <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
        <SortInput sortOption={sortOption} handleSort={handleSort} />
      </div>
      <UserList users={filteredUsers} />
    </div>
  );
};

export default Home;
