export function initNavToggle(root = document) {
  const toggleBtn = root.querySelector('.nav-toggle');
  const nav = root.querySelector('.main-nav');
  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => initNavToggle());
