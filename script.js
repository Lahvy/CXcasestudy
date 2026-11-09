'use strict';

/**
 * Accessible, zero-dependency presentation controller.
 * Desktop: scaled 1440 × 810 canvas (16:9)
 * Small screens: readable vertical slide layout
 * Deep links: #slide-1 ... #slide-5
 */
(() => {
  const SLIDE_WIDTH = 1440;
  const SLIDE_HEIGHT = 810;
  const MOBILE_BREAKPOINT = 800;
  const slideTitles = [
    'Jak bych postupoval?',
    'Proč lidé kupují ojeté auto?',
    'Kde může banka přinést hodnotu?',
    'Dvě příležitosti pro ekosystém',
    'Ověřit hodnotu. Měřit posun.'
  ];

  const slides = Array.from(document.querySelectorAll('.slide'));
  const viewport = document.getElementById('slideViewport');
  const deck = document.getElementById('slideDeck');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const notesBtn = document.getElementById('notesBtn');
  const notesPane = document.getElementById('notesPane');
  const notesBackdrop = document.getElementById('notesBackdrop');
  const notesContent = document.getElementById('notesContent');
  const slideName = document.getElementById('slideName');
  const currentPage = document.getElementById('currentPage');
  const mobileSlideLabel = document.getElementById('mobileSlideLabel');
  const announcement = document.getElementById('announcement');
  const pageDots = [...document.querySelectorAll('.page-dot')];
  const aboutDialog = document.getElementById('aboutDialog');
  const flowDialog = document.getElementById('flowDialog');

  let current = 1;
  let touchStartX = 0;
  let touchStartY = 0;

  function isMobile() {
    return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
  }

  function resize() {
    if (isMobile()) {
      deck.style.transform = '';
      viewport.style.width = '';
      viewport.style.height = '';
      return;
    }

    // Fit the entire 16:9 slide into the presentation area.
    const outer = document.querySelector('.presentation');
    const cs = getComputedStyle(outer);
    const availableWidth = outer.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const availableHeight = outer.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    const scale = Math.min(availableWidth / SLIDE_WIDTH, availableHeight / SLIDE_HEIGHT, 1.26);

    viewport.style.width = `${Math.round(SLIDE_WIDTH * scale)}px`;
    viewport.style.height = `${Math.round(SLIDE_HEIGHT * scale)}px`;
    deck.style.transform = `scale(${scale})`;
  }

  function parseHash() {
    const match = /^#slide-(\d+)$/.exec(window.location.hash);
    if (!match) return 1;
    return Math.min(slides.length, Math.max(1, Number(match[1])));
  }

  function showSlide(index, updateHash = true) {
    const next = Math.max(1, Math.min(index, slides.length));
    current = next;

    slides.forEach((slide, i) => {
      const active = i + 1 === next;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      // Remove hidden slide controls from the keyboard tab order.
      if (active) slide.removeAttribute('inert');
      else slide.setAttribute('inert', '');
    });

    pageDots.forEach((dot, i) => {
      const selected = i + 1 === next;
      dot.classList.toggle('active', selected);
      if (selected) dot.setAttribute('aria-current', 'step');
      else dot.removeAttribute('aria-current');
    });

    currentPage.textContent = String(next).padStart(2, '0');
    slideName.textContent = slideTitles[next - 1];
    mobileSlideLabel.textContent = `${String(next).padStart(2, '0')} / 05 · ${slideTitles[next - 1]}`;
    prevBtn.disabled = next === 1;
    nextBtn.disabled = next === slides.length;
    announcement.textContent = `Slide ${next} z ${slides.length}: ${slideTitles[next - 1]}`;

    if (updateHash && window.location.hash !== `#slide-${next}`) {
      history.replaceState(null, '', `#slide-${next}`);
    }

    if (notesPane.classList.contains('open')) updateNotes();
    if (isMobile()) window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function updateNotes() {
    const template = slides[current - 1].querySelector('.speaker-template');
    notesContent.replaceChildren(template.content.cloneNode(true));
    notesContent.scrollTop = 0;
  }

  function toggleNotes(force) {
    const open = typeof force === 'boolean' ? force : !notesPane.classList.contains('open');
    notesPane.classList.toggle('open', open);
    notesPane.setAttribute('aria-hidden', String(!open));
    notesBtn.setAttribute('aria-expanded', String(open));
    notesBackdrop.hidden = !open;
    if (open) {
      updateNotes();
      document.getElementById('closeNotes').focus();
    } else {
      notesBtn.focus();
    }
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (err) {
      // Some mobile browsers do not support fullscreen on regular elements.
      console.info('Fullscreen is not supported here.', err);
    }
    resize();
  }

  function openDialog(dialog) {
    if (notesPane.classList.contains('open')) toggleNotes(false);
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }

  prevBtn.addEventListener('click', () => showSlide(current - 1));
  nextBtn.addEventListener('click', () => showSlide(current + 1));
  pageDots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.go))));
  notesBtn.addEventListener('click', () => toggleNotes());
  document.getElementById('closeNotes').addEventListener('click', () => toggleNotes(false));
  notesBackdrop.addEventListener('click', () => toggleNotes(false));
  document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('aboutBtn').addEventListener('click', () => openDialog(aboutDialog));
  document.getElementById('flowBtn').addEventListener('click', () => openDialog(flowDialog));
  document.querySelectorAll('[data-close-dialog]').forEach(button => {
    button.addEventListener('click', () => button.closest('dialog').close());
  });
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    });
  });

  window.addEventListener('keydown', event => {
    // Native dialog owns keyboard interactions while open.
    if (document.querySelector('dialog[open]')) return;
    if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)) return;

    if (event.key === 'Escape') {
      if (notesPane.classList.contains('open')) toggleNotes(false);
      return;
    }
    if (event.key.toLowerCase() === 'n' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      toggleNotes();
      return;
    }
    if (event.key.toLowerCase() === 'f' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      toggleFullscreen();
      return;
    }
    if (notesPane.classList.contains('open')) return;

    if (['ArrowRight', 'PageDown'].includes(event.key)) {
      event.preventDefault();
      showSlide(current + 1);
    } else if (['ArrowLeft', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      showSlide(current - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      showSlide(1);
    } else if (event.key === 'End') {
      event.preventDefault();
      showSlide(slides.length);
    }
  });

  // Swipe horizontally on touch devices, but preserve vertical scrolling.
  document.querySelector('.presentation').addEventListener('touchstart', event => {
    if (event.touches.length !== 1) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }, { passive: true });
  document.querySelector('.presentation').addEventListener('touchend', event => {
    if (!touchStartX || !event.changedTouches.length) return;
    const dx = event.changedTouches[0].clientX - touchStartX;
    const dy = event.changedTouches[0].clientY - touchStartY;
    touchStartX = touchStartY = 0;
    if (Math.abs(dx) < 70 || Math.abs(dx) < 1.5 * Math.abs(dy)) return;
    showSlide(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  window.addEventListener('hashchange', () => showSlide(parseHash(), false));
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('fullscreenchange', resize);
  if ('ResizeObserver' in window) {
    new ResizeObserver(resize).observe(document.querySelector('.presentation'));
  }

  // Initial state supports direct URLs to individual slides.
  showSlide(parseHash(), false);
  resize();
})();
