export async function getCats() {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/cats`);
  const data = await rawResponse.json();

  return data;
}

export async function getById(id) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/cats/${id}`);
  const data = await rawResponse.json();

  return data;
}

export async function addCat(cat) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/cats`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(cat),
  });
  const data = await rawResponse.json();
  return data;
}
