import React from 'react';
// import Cat from './Cat.js';

export default function CatList({ catList }) {
  console.log(catList);
  return (
    <div className="Cats-list">
      {catList.map((cat) => (
        <p key={cat.id}>{cat.name}</p>
      ))}
    </div>
  );
}
