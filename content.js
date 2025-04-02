// Función para aplicar el filtro de inversión de colores
function invertColors() {
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