import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function CompletarDatos() {
  const router = useRouter();

  const [datosRegistrados, setDatosRegistrados] = useState({
    nombres: '',
    apellidos: '',
    celular: '',
    correo_electronico: ''
  });

  const [formulario, setFormulario] = useState({
    id_persona_rol: '',
    tipo_documento: '',
    nombres: '',
    apellidos: '',
    numero_documento: '',
    adjuntar_documento: null,
    direccion: '',
    direccion_opcional: '',
    departamento_id: '',
    provincia_id: '',
    distrito_id: '',
    fecha_nacimiento: '',
    edad: '',
    nacionalidad: '',
    profesion_id: '',
    celular: '',
    correo_electronico: '',
    entidad_bancaria_id: '',
    tipo_moneda_id: '',
    cuenta_bancaria: '',
    cuenta_interbancaria: ''
  });

  useEffect(() => {
    obtenerDatosRegistrados();
    obtenerTipoDocumento();
    obtenerDepartamentos();
    obtenerProvincias();
    obtenerDistritos();
    obtenerNacionalidad();
    obtenerProfesion();
    obtenerEntidadBancaria();
    obtenerTipoMoneda();
  }, []);

  const obtenerDatosRegistrados = async () => {
    try {
      // Obtener el código de usuario de la URL
      const codigoUsuarioParam = router.query.codigo_usuario;
      if (codigoUsuarioParam) {
        // Aquí puedes hacer una petición a tu API para obtener los datos del usuario por el código
        const response = await axios.get(`http://localhost:8000/api/update/${codigoUsuarioParam}`);
        const { nombres, apellidos, celular, correo_electronico } = response.data;
        setDatosRegistrados({ nombres, apellidos, celular, correo_electronico });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerTipoDocumento = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/documentos');
      // Lógica para procesar los datos de tipo de documento (response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerDepartamentos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/departamentos');
      // Lógica para procesar los datos de departamentos (response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerProvincias = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/provincias');
      // Lógica para procesar los datos de provincias (response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerDistritos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/distritos');
      // Lógica para procesar los datos de distritos (response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerNacionalidad = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/nacionalidad');
      // Lógica para procesar los datos de nacionalidad (response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerProfesion = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/profesion');
      // Lógica para procesar los datos de profesión (response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerEntidadBancaria = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/bancaria');
      // Lógica para procesar los datos de entidad bancaria (response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerTipoMoneda = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tipomoneda');
      // Lógica para procesar los datos de tipo de moneda (response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleAdjuntarDocumento = (e) => {
    setFormulario({ ...formulario, adjuntar_documento: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8000/api/update/{codigo_usuario}`, formulario);
      console.log(response.data);
      // Realizar acciones adicionales después de la actualización exitosa
    } catch (error) {
      console.error(error.response.data);
      // Manejar errores durante la actualización
    }
  };
  return (
    <div>
      <h1>Nueva Página</h1>
      <form onSubmit={handleSubmit}>
        <input type="radio" name="id_persona_rol" value="1" /> Soy Persona Natural
        <input type="radio" name="id_persona_rol" value="2" /> Soy Persona Jurídica

        <select name="tipo_documento" onChange={handleChange} required>
          {/* Opciones generadas dinámicamente desde la API de documentos */}
        </select>

        <input type="text" name="nombres" placeholder="Nombres" value={datosRegistrados.nombres} disabled />
        <input type="text" name="apellidos" placeholder="Apellidos" value={formulario.apellidos} onChange={handleChange} required />
        <input type="text" name="numero_documento" placeholder="Número de Documento" value={formulario.numero_documento} onChange={handleChange} required />
        <input type="file" name="adjuntar_documento" onChange={handleAdjuntarDocumento} />

        <input type="text" name="direccion" placeholder="Dirección" value={formulario.direccion} onChange={handleChange} required />
        <input type="text" name="direccion_opcional" placeholder="Dirección Opcional" value={formulario.direccion_opcional} onChange={handleChange} />

        <select name="departamento_id" onChange={handleChange} required>
          {/* Opciones generadas dinámicamente desde la API de departamentos */}
        </select>

        <select name="provincia_id" onChange={handleChange} required>
          {/* Opciones generadas dinámicamente desde la API de provincias */}
        </select>

        <select name="distrito_id" onChange={handleChange} required>
          {/* Opciones generadas dinámicamente desde la API de distritos */}
        </select>

        <input type="date" name="fecha_nacimiento" value={formulario.fecha_nacimiento} onChange={handleChange} required />
        <input type="number" name="edad" placeholder="Edad" value={formulario.edad} onChange={handleChange} required />

        <select name="nacionalidad" onChange={handleChange} required>
          {/* Opciones generadas dinámicamente desde la API de nacionalidad */}
        </select>

        <select name="profesion_id" onChange={handleChange} required>
          {/* Opciones generadas dinámicamente desde la API de profesiones */}
        </select>

        <input type="text" name="celular" placeholder="Celular" value={formulario.celular} onChange={handleChange} required />
        <input type="email" name="correo_electronico" placeholder="Correo Electrónico" value={formulario.correo_electronico} onChange={handleChange} required />

        <select name="entidad_bancaria_id" onChange={handleChange} required>
          {/* Opciones generadas dinámicamente desde la API de entidad bancaria */}
        </select>

        <select name="tipo_moneda_id" onChange={handleChange} required>
          {/* Opciones generadas dinámicamente desde la API de tipo de moneda */}
        </select>

        <input type="text" name="cuenta_bancaria" placeholder="Cuenta Bancaria" value={formulario.cuenta_bancaria} onChange={handleChange} />
        <input type="text" name="cuenta_interbancaria" placeholder="Cuenta Interbancaria" value={formulario.cuenta_interbancaria} onChange={handleChange} />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
