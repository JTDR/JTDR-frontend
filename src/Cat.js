import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from './services/fetch-utils';

export default function Cat({ Cats }) {
  const [cat, setCat] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function load() {
      const cat = await getById(id);
      setCat(cat);
    }
    load();
  }, []);
  console.log(cat);

  return <div className="Cat">{<p>man. look its a cat</p>}</div>;
}
