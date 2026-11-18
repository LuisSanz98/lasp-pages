// Contador de visitas privado (sin cookies ni IPs). Lo recoge el worker de Cloudflare; el resumen lo ve solo el dueño.
(() => {
  try {
    const q = new URLSearchParams(location.search);
    if (q.has('no-contar')) localStorage.setItem('lasp-no-contar', '1');
    if (localStorage.getItem('lasp-no-contar') || navigator.webdriver) return;
  } catch (e) { /* sin localStorage se cuenta igual */ }
  const id = new URLSearchParams(location.search).get('id');
  const p = location.pathname.includes('producto') ? id : 'portada';
  if (!p) return;
  let r = '';
  try {
    const h = document.referrer && new URL(document.referrer).hostname;
    if (h && !/(^|\.)lasp\.es$/.test(h)) r = h.toLowerCase();
  } catch (e) { /* referrer raro: sin procedencia */ }
  let v = '';
  try {
    v = localStorage.getItem('lasp-vid');
    if (!v) { v = crypto.randomUUID().replace(/-/g, ''); localStorage.setItem('lasp-vid', v); }
  } catch (e) { /* sin localStorage: se cuenta la página pero no como visitante único */ }
  fetch('https://plain-feather-0edf.luis-asesoriaseguros.workers.dev/api/visita', {
    method: 'POST', body: JSON.stringify({ p, r, v }), keepalive: true
  }).catch(() => {});
})();
