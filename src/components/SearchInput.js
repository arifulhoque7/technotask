// SearchInput.js
import React from 'react';

const SearchInput = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleSearch}
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
  );
};

export default SearchInput;
