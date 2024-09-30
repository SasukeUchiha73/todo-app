import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')} style={{backgroundColor:'green'}}>Completed</button>
      <button onClick={() => setFilter('pending')} style={{backgroundColor:'red'}}>Pending</button>
      
    </div>
  );
};

export default Filter;