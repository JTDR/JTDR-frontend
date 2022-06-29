import React from 'react';
import { Link } from 'react-router-dom';
// import Cat from './Cat.js';

export default function CatList({ catList }) {
  return (
    <div className="Cats-list">
      {catList.map((cat) => (
        <Link to={`/cats/${cat.id}`} key={cat.id}>
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
