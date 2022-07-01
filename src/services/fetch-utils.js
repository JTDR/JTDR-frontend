export async function getCats() {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/cats`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
  const data = await rawResponse.json();

  return data;
}

export async function getById(id) {
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/cats/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
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

export async function signUpUserFunction(user) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
}

export async function signInUserFunction(user) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
}

export async function logoutUser() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/sessions`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors'
  });
  const data = await response.json();
  return data;
}

export async function getUser() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/me`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors'
  });
  const data = await response.json();
  return data;
}
