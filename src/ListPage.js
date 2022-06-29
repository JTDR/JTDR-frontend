import React from 'react';
import Cat from './Cat.js';

export default function CatList({ Cats }) {
  return <div className='Cats-list'>
    { 
      Cats.map(Cat => <Cat key={Cat.id} {...Cat} />
      )
    }

  </div>;
}