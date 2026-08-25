const io = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});document.querySelectorAll('.section-head,.work-card,.service-card,.price-card,.about>*,.contact>*').forEach(el=>{el.classList.add('reveal');io.observe(el)});

const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (navToggle && mobileNav) {
  const closeMobileNav = () => {
    mobileNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  };
  navToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));
}