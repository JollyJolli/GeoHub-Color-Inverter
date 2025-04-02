// Función para verificar si estamos en una página de juego
function isGamePage() {
  const excludedPaths = [
    '/',
    '/map/',
    '/streaks',
    '/daily-challenge',
    '/my-maps',
    '/liked',
    '/maps',
    '/ongoing'
  ];

  const currentPath = window.location.pathname;
  
  // Si la ruta actual está en la lista de exclusiones, retornar false
  if (excludedPaths.includes(currentPath)) {
    return false;
  }

  // Solo permitir la inversión en páginas de juego
  return currentPath.includes('/game/');
}

// Función para aplicar el filtro de inversión de colores
function invertColors() {
  if (!isGamePage()) return;

  document.body.style.filter = 'invert(1)';
  // Evitar que las imágenes se inviertan doblemente
  const images = document.getElementsByTagName('img');
  for (let img of images) {
    img.style.filter = 'invert(1)';
  }
}

// Aplicar la inversión cuando se carga la página
document.addEventListener('DOMContentLoaded', invertColors);

// También aplicar cuando hay cambios dinámicos en la página
const observer = new MutationObserver(invertColors);
observer.observe(document.body, {
  childList: true,
  subtree: true
});