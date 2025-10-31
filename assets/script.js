// Mobile hamburger toggle (slide-down) with accessibility
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');

function closeMenu(){ menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
function openMenu(){ menu.classList.add('open'); toggle.setAttribute('aria-expanded','true'); }

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  expanded ? closeMenu() : openMenu();
});

// Close menu when clicking a link (mobile)
menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => closeMenu());
});

// Close on escape
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeMenu();
});

// Close if clicked outside on mobile
document.addEventListener('click', (e) => {
  if(window.innerWidth > 980) return;
  if(!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
});
