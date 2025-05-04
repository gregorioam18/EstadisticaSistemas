 // Cargar modales
 fetch('components/modales.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('modals-container').innerHTML = html;
        setupModals();
      });

    function setupModals() {
      // Efecto ripple para los botones
      document.querySelectorAll('.view-evaluation-btn').forEach(button => {
        button.addEventListener('click', function(e) {
          e.stopPropagation();
          
          // Crear efecto ripple
          const ripple = document.createElement('span');
          ripple.classList.add('ripple');
          this.appendChild(ripple);
          
          // Posicionar ripple
          const rect = this.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          ripple.style.width = ripple.style.height = `${size}px`;
          ripple.style.left = `${e.clientX - rect.left - size/2}px`;
          ripple.style.top = `${e.clientY - rect.top - size/2}px`;
          
          // Eliminar ripple después de la animación
          setTimeout(() => {
            ripple.remove();
          }, 600);
          
          // Abrir modal
          const modalId = this.getAttribute('data-modal');
          const modal = document.getElementById(modalId);
          if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
          }
        });
      });

      // Cerrar modal
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
          if (e.target === this || e.target.classList.contains('close-modal')) {
            // Animación de salida
            const modalContent = this.querySelector('.modal-content');
            modalContent.style.animation = 'slideIn 0.3s ease reverse';
            
            setTimeout(() => {
              this.classList.remove('active');
              document.body.style.overflow = 'auto';
              modalContent.style.animation = ''; // Resetear animación
            }, 250);
          }
        });
      });
    }