import React, { useEffect, useState } from 'react';
import { getById, updateCat } from './services/fetch-utils';
import { useHistory, useParams } from 'react-router-dom';

export default function CreatePage() {
  const [cat, setCat] = useState({
    name: '',
    age: 0,
    eyes: '',
    fur: '',
  });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function load() {
      const cat = await getById(id);
      setCat(cat);
    }
    load();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    await updateCat(cat);
    history.push('/cats');
  }

  return (
    <div className="update">
      <form className="update-form" onSubmit={handleSubmit}>
        <label>
          Cat Name
          <input
            required
            value={cat.name}
            type="text"
            onChange={(e) => setCat({ ...cat, name: e.target.value })}
          />
        </label>
        <label>
          Cat Age
          <input
            required
            value={cat.age}
            type="number"
            onChange={(e) => setCat({ ...cat, age: e.target.value })}
          />
        </label>
        <label>
          What color eyes does your cat have?
          <input
            required
            value={cat.eyes}
            type="text"
            onChange={(e) => setCat({ ...cat, eyes: e.target.value })}
          />
        </label>
        <label>
          What color fur does your cat have?
          <input
            required
            value={cat.fur}
            type="text"
            onChange={(e) => setCat({ ...cat, fur: e.target.value })}
          />
        </label>
        <button type="submit">Update Cat</button>
      </form>
    </div>
  );
}
