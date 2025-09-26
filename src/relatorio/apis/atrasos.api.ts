import axios from 'axios';

export async function buscarAtrasos() {
  const { data } = await axios.get('https://dbbiblioteca.com/atrasos');
  return data;
}
