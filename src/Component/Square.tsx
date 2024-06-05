import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button className="square w-12 h-12 bg-white border border-gray-400 text-xl font-bold flex items-center justify-center" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;