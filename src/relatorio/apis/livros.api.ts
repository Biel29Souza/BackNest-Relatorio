import axios from 'axios';

export async function buscarLivros() {
  const { data } = await axios.get('https://dbbiblioteca.com/livros');
  return data;
}
