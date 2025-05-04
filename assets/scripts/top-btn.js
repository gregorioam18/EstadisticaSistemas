// Función para inyectar el componente en la página
function injectGoToTopButton() {
    // Crear elemento link para el CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'go-to-top.css';
    
    // Crear elemento div para el HTML
    const div = document.createElement('div');
    div.innerHTML = `
      <button id="go-to-top-btn" class="go-to-top" title="Go to top">↑</button>
    `;
    
    // Agregar al documento
    document.head.appendChild(link);
    document.body.appendChild(div);
    
    // Obtener el botón
    const goToTopButton = document.getElementById('go-to-top-btn');
    
    // Mostrar/ocultar botón al hacer scroll
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        goToTopButton.style.display = 'block';
      } else {
        goToTopButton.style.display = 'none';
      }
    });
    
    // Función para ir al inicio
    goToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Llamar a la función cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectGoToTopButton);
  } else {
    injectGoToTopButton();
  }