import axios from 'axios';

const Inversionista = async (datos) => {
  try {
    const response = await axios.post('http://localhost:8000/api/registro', datos);
    console.log(response.data);
    // Realizar acciones adicionales después de un registro exitoso
  } catch (error) {
    console.error(error.response.data);
    // Manejar errores durante el registro
  }
};
export default Inversionista;

