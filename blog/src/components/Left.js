import React, { useContext } from 'react';
import { AppDataContext } from './DataContext';

function Left() {
  const { categories } = useContext(AppDataContext);

  return (
    <div className="left">
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Left;
