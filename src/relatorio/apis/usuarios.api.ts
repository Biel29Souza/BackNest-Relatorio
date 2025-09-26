import axios from 'axios';

export async function buscarUsuarios() {
  const { data } = await axios.get('https://dbbiblioteca.com/usuarios');
  return data;
}
