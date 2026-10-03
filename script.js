// Funcionalidad interactiva para el carrito de compras
document.addEventListener('DOMContentLoaded', () => {
  let cartCount = 0;
  const cartBadge = document.getElementById('cart-count');
  const addButtons = document.querySelectorAll('.btn-add-cart');

  addButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      if (cartBadge) {
        cartBadge.textContent = cartCount;
      }
      
      // Animación visual al agregar producto
      button.classList.remove('btn-dark');
      button.classList.add('btn-success');
      button.innerHTML = '<i class="bi bi-check-lg me-1"></i> Agregado';
      
      setTimeout(() => {
        button.classList.remove('btn-success');
        button.innerHTML = '<i class="bi bi-cart-plus me-1"></i> Agregar';
      }, 1500);
    });
  });
});