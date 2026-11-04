document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Render catalog from shared product data
const productGrid = document.getElementById('productGrid');

if (productGrid && typeof PRODUCTS !== 'undefined') {
  // Los productos agotados (sold: true, stock 0) no se muestran en el listado.
  productGrid.innerHTML = PRODUCTS.filter(p => !p.sold).map(p => `
    <article class="product-card" data-category="${p.category}">
      <a class="product-media" href="producto.html?id=${encodeURIComponent(p.id)}">
        <span class="stock-badge">Stock: ${p.stock}</span>
        ${p.images && p.images.length
          ? `<img src="${p.images[0]}" alt="${p.name}" class="product-photo" loading="lazy">`
          : `<div class="product-placeholder">${p.badge}</div>`}
      </a>
      <div class="product-body">
        <h3><a href="producto.html?id=${encodeURIComponent(p.id)}">${p.name}</a></h3>
        <p>${p.shortDesc}</p>
        <div class="product-footer">
          <span class="price">${p.price}</span>
          <a href="#contacto" class="btn btn-small" data-item="${p.name}">Reservar</a>
        </div>
      </div>
    </article>
  `).join('');
}

// Catalog filter (works on the cards rendered above)
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

// Pre-fill "pieza" field when a "Reservar" button is clicked
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-item]');
  if (!btn) return;
  const piezaInput = document.getElementById('pieza');
  if (piezaInput) piezaInput.value = btn.dataset.item;
});

// If we arrived from a product page wanting to reserve, prefill and scroll to the form
const pendingItem = sessionStorage.getItem('laspReserveItem');
if (pendingItem) {
  const piezaInput = document.getElementById('pieza');
  if (piezaInput) piezaInput.value = pendingItem;
  sessionStorage.removeItem('laspReserveItem');
}

// Contact form -> opens a pre-filled email (no backend required)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const pieza = document.getElementById('pieza').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    const subject = encodeURIComponent(`Reserva · ${pieza || 'Consulta general'}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmail: ${email}\nPieza de interés: ${pieza || '-'}\n\nMensaje:\n${mensaje}`
    );

    window.location.href = `mailto:laspsl@me.com?subject=${subject}&body=${body}`;
    formNote.textContent = 'Abriendo tu cliente de correo con la solicitud lista para enviar…';
  });
}
