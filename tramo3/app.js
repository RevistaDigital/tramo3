// Mostrar pantalla de carga al cargar la página
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  loader.style.display = 'block';

  // Simular tiempo de carga
  setTimeout(function () {
    loader.style.display = 'none';
  }, 2000);
});

