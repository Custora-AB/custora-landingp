(function () {
  // Year
  document.querySelectorAll('.yr').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Mobile menu
  var burger = document.querySelector('.burger'), menu = document.getElementById('menu');
  if (burger && menu) burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Dropdowns (click / keyboard; hover handled in CSS on desktop)
  var dds = Array.prototype.slice.call(document.querySelectorAll('.dd'));
  dds.forEach(function (dd) {
    var btn = dd.querySelector('.dd-btn');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !dd.classList.contains('open');
      dds.forEach(function (o) { o.classList.remove('open'); o.querySelector('.dd-btn').setAttribute('aria-expanded', 'false'); });
      dd.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dd')) dds.forEach(function (o) { o.classList.remove('open'); o.querySelector('.dd-btn').setAttribute('aria-expanded', 'false'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') dds.forEach(function (o) { o.classList.remove('open'); });
  });

  // Product tabs (home)
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).classList.toggle('on', on);
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus(); e.preventDefault();
    });
  });

  // Contact form -> /api/contact (same endpoint as the current site)
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('f-status'), btn = document.getElementById('f-submit');
    var label = btn.textContent, sv = document.documentElement.lang !== 'en';
    var T = sv
      ? { bad: 'Fyll i namn och en giltig e-postadress.', sending: 'Skickar...', ok: 'Tack! Vi hör av oss inom kort.', err: 'Det gick inte att skicka. Kontrollera anslutningen och försök igen.' }
      : { bad: 'Add your name and a valid work email.', sending: 'Sending...', ok: "Thanks. We'll be in touch shortly.", err: "That didn't go through. Check your connection and try again." };
    var show = function (k, t) { status.className = 'form-msg ' + k; status.textContent = t; status.hidden = false; };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim(), email = form.email.value.trim();
      if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { show('err', T.bad); return; }
      var message = 'Contact request (' + (sv ? 'sv' : 'en') + ')\nCompany: ' + (form.company.value.trim() || '-') + '\n\n' + form.message.value.trim();
      btn.disabled = true; btn.textContent = T.sending;
      fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name, email: email, message: message }) })
        .then(function (r) { return r.json().then(function (d) { if (!r.ok || !d.ok) throw new Error('failed'); }); })
        .then(function () { form.reset(); show('ok', T.ok); })
        .catch(function () { show('err', T.err); })
        .finally(function () { btn.disabled = false; btn.textContent = label; });
    });
  }
})();
