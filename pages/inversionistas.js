import { useState } from 'react';
import axios from 'axios';

export default function Registro() {
  const [datos, setDatos] = useState({
    codigo_usuario: '',
    nombres: '',
    apellidos: '',
    celular: '',
    correo_electronico: '',
    password: ''
  });

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/registro', datos);
      console.log(response.data);
      // Realizar acciones adicionales después de un registro exitoso
    } catch (error) {
      console.error(error.response.data);
      // Manejar errores durante el registro
    }
  };

  return (
    <div>
      <h1>Registro de Usuario Inversionistas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="codigo_usuario" placeholder="Código de usuario" value={datos.codigo_usuario} onChange={handleChange} required />
        <input type="text" name="nombres" placeholder="Nombres" value={datos.nombres} onChange={handleChange} required />
        <input type="text" name="apellidos" placeholder="Apellidos" value={datos.apellidos} onChange={handleChange} required />
        <input type="text" name="celular" placeholder="Celular" value={datos.celular} onChange={handleChange} required />
        <input type="email" name="correo_electronico" placeholder="Correo Electrónico" value={datos.correo_electronico} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" value={datos.password} onChange={handleChange} required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
