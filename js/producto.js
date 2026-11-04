document.getElementById('year').textContent = new Date().getFullYear();

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

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const product = PRODUCTS.find(p => p.id === productId);

const fichaContent = document.getElementById('fichaContent');
const fichaNotFound = document.getElementById('fichaNotFound');
const breadcrumbName = document.getElementById('breadcrumbName');

if (!product) {
  fichaContent.hidden = true;
  fichaNotFound.hidden = false;
} else {
  document.title = `${product.name} · LASP NEO·GEO Archive`;
  breadcrumbName.textContent = product.name;

  fichaContent.innerHTML = `
    <div class="ficha-media${product.sold ? ' is-sold' : ''}${product.images && product.images.length ? ' has-photos' : ''}">
      <span class="stock-badge${product.sold ? ' stock-badge-sold' : ''}">${product.sold ? 'Agotado' : `Stock: ${product.stock}`}</span>
      ${product.images && product.images.length
        ? product.images.map((src, i) => `<img src="${src}" alt="${product.name} · foto ${i + 1}" class="ficha-photo" loading="lazy">`).join('')
        : `<div class="product-placeholder ficha-placeholder">${product.badge}</div>`}
      ${product.sold ? '<span class="sold-stamp">Ya agotado</span>' : ''}
    </div>
    <div class="ficha-info">
      <p class="eyebrow">${product.categoryLabel}</p>
      <h1>${product.name}</h1>
      <p class="ficha-price">${product.price}</p>
      <p class="ficha-desc">${product.longDesc}</p>

      <table class="specs-table">
        ${product.specs.map(([label, value]) => `
          <tr><th>${label}</th><td>${value}</td></tr>
        `).join('')}
      </table>

      ${product.sold ? `
        <p class="sold-note">Esta pieza ya se ha vendido. El stock de LASP no se repone: cuando se agota, se agota.</p>
        <div class="ficha-actions">
          <a href="index.html#catalogo" class="btn btn-primary">Ver piezas disponibles</a>
        </div>
      ` : `
        <div class="ficha-actions">
          <button type="button" class="btn btn-primary" id="reserveBtn">Reservar esta pieza</button>
          <a href="index.html#catalogo" class="btn btn-ghost">Volver al catálogo</a>
        </div>
        <p class="form-note">Al reservar te llevamos al formulario de contacto con esta pieza ya seleccionada.</p>
      `}
    </div>
  `;

  const reserveBtn = document.getElementById('reserveBtn');
  if (reserveBtn) {
    reserveBtn.addEventListener('click', () => {
      sessionStorage.setItem('laspReserveItem', product.name);
      window.location.href = 'index.html#contacto';
    });
  }
}
