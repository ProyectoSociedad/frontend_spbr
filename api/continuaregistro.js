import axios from 'axios';

export const obtenerTipoDocumento = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/documentos');
    // Lógica para procesar los datos de tipo de documento (response.data)
  } catch (error) {
    console.error(error);
  }
};

export const obtenerDepartamentos = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/departamentos');
    // Lógica para procesar los datos de departamentos (response.data)
  } catch (error) {
    console.error(error);
  }
};

export const obtenerProvincias = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/provincias');
    // Lógica para procesar los datos de provincias (response.data)
  } catch (error) {
    console.error(error);
  }
};

export const obtenerDistritos = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/distritos');
    // Lógica para procesar los datos de distritos (response.data)
  } catch (error) {
    console.error(error);
  }
};

export const obtenerNacionalidad = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/nacionalidad');
    // Lógica para procesar los datos de nacionalidad (response.data)
  } catch (error) {
    console.error(error);
  }
};

export const obtenerProfesion = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/profesion');
    // Lógica para procesar los datos de profesión (response.data)
  } catch (error) {
    console.error(error);
  }
};

export const obtenerEntidadBancaria = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/bancaria');
    // Lógica para procesar los datos de entidad bancaria (response.data)
  } catch (error) {
    console.error(error);
  }
};

export const obtenerTipoMoneda = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/tipomoneda');
    // Lógica para procesar los datos de tipo de moneda (response.data)
  } catch (error) {
    console.error(error);
  }
};
