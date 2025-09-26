import axios from 'axios';

export async function buscarMultas() {
  const { data } = await axios.get('https://dbbiblioteca.com/multas');
  return data;
}
