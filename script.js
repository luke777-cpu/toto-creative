const io = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.section-head,.work-card,.service-card,.price-card,.about>*,.contact>*,.work-tile,.service-block,.value-card,.team-card,.detail-block,.contact-info>*').forEach(el=>{el.classList.add('reveal');io.observe(el)});

// 현재 페이지 메뉴 표시
(function highlightNav(){
  const norm = (p) => p.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  const current = norm(location.pathname);
  document.querySelectorAll('.nav a, .mobile-nav a[href]:not(.btn)').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    const target = norm(new URL(href, location.href).pathname);
    if (target === current) a.setAttribute('aria-current', 'page');
  });
})();

// PRICE 페이지: data.js의 TOTO_PRICING을 카드로 렌더
(function renderPricing(){
  const grid = document.getElementById('price-grid');
  if (!grid || !window.TOTO_PRICING) return;
  grid.innerHTML = window.TOTO_PRICING.map((p) => `
    <div class="price-card${p.featured ? ' featured' : ''}">
      <span>${p.tag}</span>
      <h3>${p.tier}</h3>
      <strong>${p.price}</strong>
      <ul>${p.features.map((f) => `<li>${f}</li>`).join('')}</ul>
    </div>
  `).join('');
})();

// CONTACT 페이지: 실제 문의 전송 (FormSubmit)
(function wireContactForm(){
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    if (status) { status.textContent = '보내는 중...'; status.className = 'form-status'; }
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        if (status) { status.textContent = '문의가 접수되었습니다. 빠르게 연락드릴게요.'; status.className = 'form-status ok'; }
      } else {
        throw new Error('전송 실패');
      }
    } catch (err) {
      if (status) { status.textContent = '전송에 실패했습니다. 이메일이나 전화로 연락해주세요.'; status.className = 'form-status err'; }
    } finally {
      btn.disabled = false;
    }
  });
})();

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