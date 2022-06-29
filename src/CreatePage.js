import React, { useState } from 'react';
import { addCat } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const [cat, setCat] = useState({
    name: '',
    age: 0,
    eyes: '',
    fur: '',
  });
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    await addCat(cat);
    history.push('/cats');
  }
  return (
    <div className="create">
      <form className="create-form" onSubmit={handleSubmit}>
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
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}
