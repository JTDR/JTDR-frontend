export async function getCats() {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/cats`);
  const data = await rawResponse.json();

  return data;
}

export async function getById(id) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/cats/${id}`);
  const data = await rawResponse.json();

  return data;
}

export async function deleteById(id) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/cats/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
  const data = await rawResponse.json();

  return data;
}

export async function addCat(cat) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/cats`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(cat),
  });
  const data = await rawResponse.json();
  return data;
}

export async function updateCat(cat) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/cats/${cat.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(cat),
  });
  const data = await rawResponse.json();
  return data;
}
