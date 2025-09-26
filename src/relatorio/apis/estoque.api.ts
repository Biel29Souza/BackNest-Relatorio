import axios from 'axios';

export async function buscarEstoque() {
  const { data } = await axios.get('https://dbbiblioteca.com/estoque');
  return data;
}
