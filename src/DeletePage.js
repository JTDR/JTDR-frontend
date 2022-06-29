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
    <div>
      <button onClick={handleDelete}>nooo dont delete him hes a precious little boy</button>
    </div>
  );
}
