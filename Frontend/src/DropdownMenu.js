import React from 'react';

const DropdownMenu = () => {
  const options = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <select>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
