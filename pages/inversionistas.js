import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Registro() {
  const router = useRouter();

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
      const response = await axios.post('http://localhost:8000/api/registro_inversionistas', datos);
      console.log(response.data);

      // Redirigir a la página siguiente pasando el código de usuario como parámetro en la URL
      router.push(`/CompletarDatos?codigo_usuario=${response.data.codigo_usuario}`);
    } catch (error) {
      console.error(error.response.data);
      // Manejar errores durante el registro
    }
  };
  return (
    <div>
      <h1>Registro de Usuario Inversionistas</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
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
