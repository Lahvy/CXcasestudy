/* Standalone cover controller. Does not modify the five-slide presentation. */
(() => {
  'use strict';
  const cover = document.getElementById('caseCover');
  const enterButton = document.getElementById('enterPresentation');
  const app = document.querySelector('.app-shell');
  const skipLink = document.querySelector('.skip-link');
  if (!cover || !enterButton || !app) return;


  // Optional files in /logo and /photo. Keep a clean fallback until each asset loads.
  [
    ['.case-cover__brand-image', '.case-cover__brand'],
    ['.case-cover__portrait-image', '.case-cover__portrait']
  ].forEach(([imageSelector, wrapperSelector]) => {
    const asset = document.querySelector(imageSelector);
    const wrapper = document.querySelector(wrapperSelector);
    if (!asset || !wrapper) return;
    const syncAsset = () => wrapper.classList.toggle('has-asset', asset.complete && asset.naturalWidth > 0);
    asset.addEventListener('load', syncAsset);
    asset.addEventListener('error', syncAsset);
    syncAsset();
  });

  const hasSlideLink = () => /^#slide-[1-5]$/.test(window.location.hash);
  const syncCover = (visible) => {
    cover.hidden = !visible;
    document.documentElement.classList.toggle('case-cover-open', visible);
    app.inert = visible;
    if (skipLink) skipLink.inert = visible;
  };

  // Visiting the site root shows the cover; deep links to slides remain intact.
  syncCover(!hasSlideLink());

  enterButton.addEventListener('click', () => {
    cover.classList.add('is-exiting');
    app.inert = false;
    if (skipLink) skipLink.inert = false;
    history.replaceState(null, '', '#slide-1');
    const finish = () => {
      syncCover(false);
      cover.classList.remove('is-exiting');
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) finish();
    else window.setTimeout(finish, 520);
  });

  // Keep the existing #slide-N navigation and shared links working normally.
  window.addEventListener('hashchange', () => {
    cover.classList.remove('is-exiting');
    syncCover(!hasSlideLink());
  });
})();
