export async function getCats() {
  const rawResponse = await fetch(`/.netlify/functions/cat-endpoint`);
  const data = await rawResponse.json();

  return data;
}
