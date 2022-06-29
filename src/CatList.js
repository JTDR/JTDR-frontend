import React from 'react';
import { Link } from 'react-router-dom';
// import Cat from './Cat.js';

export default function CatList({ catList }) {
  return (
    <div className="cat-list">
      {catList.map((cat) => (
        <div className="cat-item" key={cat.id}>
          <Link to={`/cats/${cat.id}`} className="cat-item-details" key={cat.id + 'details'}>
            {cat.name} details
          </Link>
          <Link to={`/update/${cat.id}`} className="cat-item-update" key={cat.id + 'update'}>
            Update {cat.name}
          </Link>
          <Link to={`/delete/${cat.id}`} className="cat-item-delete" key={cat.id + 'delete'}>
            Delete {cat.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
