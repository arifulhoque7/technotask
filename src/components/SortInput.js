// SortInput.js
import React from 'react';

const SortInput = ({ sortOption, handleSort }) => {
  return (
    <select
      value={sortOption}
      onChange={handleSort}
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    >
      <option value="">Sort by...</option>
      <option value="firstName">Name</option>
      <option value="email">Email</option>
      <option value="company.name">Company Name</option>
    </select>
  );
};

export default SortInput;
