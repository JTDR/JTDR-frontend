import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from './services/fetch-utils';

export default function Cat() {
  const [cat, setCat] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function load() {
      const cat = await getById(id);
      setCat(cat);
    }
    load();
  }, [id]);

  return (
    <div className="Cat">
      <p>{cat.name}</p>
      <p>{cat.age} years old</p>
      <p>Eye colour: {cat.eyes}</p>
      <p>Fur colour: {cat.fur}</p>
    </div>);
}
