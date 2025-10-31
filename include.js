(function () {
  const headerURL = new URL('partials/header.html', document.baseURI).toString();
  const footerURL = new URL('partials/footer.html', document.baseURI).toString();

  async function inject(selector, url, after) {
    const slot = document.querySelector(selector);
    if (!slot) return;

    const res = await fetch(`${url}?v=${Date.now()}`, { cache: 'no-store' });
    if (!res.ok) {
      console.error(`Failed to fetch ${url}:`, res.status, res.statusText);
      return;
    }
    const html = await res.text();
    slot.innerHTML = html;
    if (typeof after === 'function') after(slot);
  }
function initNav(root) {
  const toggleBtn = root.querySelector('.nav-toggle');
  const nav = root.querySelector('.main-nav');
  if (!toggleBtn || !nav) return;

  toggleBtn.setAttribute('aria-expanded', 'false');

  toggleBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}


  document.addEventListener('DOMContentLoaded', async () => {
    await inject('#header-placeholder', headerURL, initNav);
    await inject('#footer-placeholder', footerURL);
  });
})();
