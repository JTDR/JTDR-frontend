import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { deleteById } from './services/fetch-utils';

export default function DeletePage() {
  const history = useHistory();
  const { id } = useParams();

  async function handleDelete() {
    await deleteById(id);
    history.push('/cats');
  }

  return (
    <div className="delete-page">
      <h2>nooo dont delete him hes a precious little boy</h2>
      <button onClick={handleDelete}>too bad</button>
    </div>
  );
}
