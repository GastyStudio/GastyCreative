// Datos de contacto en un solo lugar: si cambia el número, se cambia acá.
export const WA_NUMBER = '5491164246726';

export const waLink = (text = 'Hola Gastón, quiero consultar por una web para mi negocio') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const GITHUB = 'https://github.com/GastyStudio';
