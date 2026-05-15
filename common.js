/* ═══════════════════════════════════════════
   common.js — shared across all ES pages
   ─────────────────────────────────────────
   • Nav / burger / drawer
   • Scroll reveal
   • Section data loading (PapaParse)
   • Gallery renderer
   • Item overlay (slide-up, preserves scroll)
   • Meta injection
   • Shimmer skeleton helpers
═══════════════════════════════════════════ */

/* ── Config ── */
const SHEET_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSqEPfwqk0ju0h0kXT7IWt9iUoykb6PhJgCPTDNWnmC3zuPTMYbjhG7fzV6dNBs7LZzNeTtysfopkAv/pub?output=csv&gid=';

const SECTIONS = {
  prints:     { gid: '611338961',  urlKey: 'prints',     hasCategories: true  },
  commercial: { gid: '553657743',  urlKey: 'commercial', hasCategories: false },
  ecards:     { gid: '410511174',  urlKey: 'ecards',     hasCategories: false },
  brand:      { gid: '834260665',  urlKey: 'brand',      hasCategories: false },
  custom:     { gid: '1262380022', urlKey: 'custom',     hasCategories: false },
};

const C = {
  category: 'CATEGORY',
  image:    'IMAGE',
  etsy:     'ETSY_LINK',
  alt:      'ALT_TEXT',
  tags:     'TAGS',
  title:    'TITLE',
  pinDesc:  'PIN_DESC',
};

/* ── Helpers ── */
function get(row, key) { return (row[C[key]] || '').trim(); }

function getImage(row) {
  const named = get(row, 'image');
  if (named) return named;
  for (let v of Object.values(row)) {
    const s = (v || '').trim();
    if (s.startsWith('http')) return s;
  }
  return '';
}

function slugify(s)    { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
function itemSlug(row) {
  const t = get(row, 'title');
  if (t) return slugify(t);
  const img = get(row, 'image');
  return slugify(img.split('/').pop().replace(/\.[^.]+$/, '') || 'item');
}
function catSlug(label) { return slugify(label); }

/* ── Per-section store ── */
const sectionData = {};
Object.keys(SECTIONS).forEach(k => {
  sectionData[k] = {
    loaded: false,
    store: {},
    categoryMap: {},
    categoryOrder: [],
    flatRows: [],
    currentCat: null,
  };
});

/* ═══ NAV ═══ */
const burger = document.getElementById('navBurger');
const drawer = document.getElementById('navDrawer');

if (burger && drawer) {
  burger.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  // close drawer when clicking outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-wrap')) {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
    }
  });
}

/* ═══ SCROLL REVEAL ═══ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

function observeReveals(root = document) {
  root.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs.observe(el));
}

/* ═══ IMAGE FADE-IN (prevent flicker) ═══ */
function fadeImages(container) {
  container.querySelectorAll('img').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
    }
  });
}

/* ═══ META ═══ */
function setMeta(attr, key, val) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attr, key); document.head.appendChild(tag); }
  tag.setAttribute('content', val);
}

function injectItemMeta(row, slug, sectionKey) {
  const base  = window.location.origin + window.location.pathname;
  const url   = base + '?item=' + sectionKey + '/' + slug;
  const image = getImage(row);
  const title = get(row, 'title')   || 'Estelle Stephens';
  const desc  = get(row, 'pinDesc') || title;
  document.title = title + ' — Estelle Stephens';
  setMeta('name',     'description',         desc);
  setMeta('property', 'og:url',              url);
  setMeta('property', 'og:title',            title);
  setMeta('property', 'og:description',      desc);
  setMeta('property', 'og:image',            image);
  setMeta('name',     'twitter:title',       title);
  setMeta('name',     'twitter:description', desc);
  setMeta('name',     'twitter:image',       image);
}

function resetMeta(defaultTitle) {
  document.title = defaultTitle || 'Estelle Stephens — Illustrator & Designer';
}

/* ═══ ITEM OVERLAY (slide-up, no scroll reset) ═══ */
let _scrollY = 0;  // save gallery scroll before opening
let _openItemSection = null;
let _openItemSlug    = null;

const overlay         = document.getElementById('itemOverlay');
const overlayBackdrop = document.getElementById('itemOverlayBackdrop');
const itemBack        = document.getElementById('itemBack');
const itemContent     = document.getElementById('itemContent');

function openItem(sectionKey, slug) {
  const row = sectionData[sectionKey]?.store[slug];
  if (!row) return;

  _openItemSection = sectionKey;
  _openItemSlug    = slug;
  _scrollY = window.scrollY;

  renderItemPage(sectionKey, row, slug);
  injectItemMeta(row, slug, sectionKey);

  // history
  const base = window.location.href.split('?')[0];
  history.pushState({ item: sectionKey + '/' + slug }, '', base + '?item=' + sectionKey + '/' + slug);

  // slide up
  overlay.scrollTop = 0;
  overlay.classList.add('open');
  if (overlayBackdrop) overlayBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  observeReveals(overlay);
  fadeImages(overlay);
}

function closeItem() {
  overlay.classList.remove('open');
  if (overlayBackdrop) overlayBackdrop.classList.remove('open');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';

  resetMeta(window._pageDefaultTitle);

  // restore scroll position exactly — no jump
  requestAnimationFrame(() => {
    window.scrollTo({ top: _scrollY, behavior: 'instant' });
  });

  // clean URL
  const base = window.location.href.split('?')[0];
  history.pushState({}, '', base);

  _openItemSection = null;
  _openItemSlug    = null;
}

if (itemBack) {
  itemBack.addEventListener('click', closeItem);
}
if (overlayBackdrop) {
  overlayBackdrop.addEventListener('click', closeItem);
}

// Back button / browser history
window.addEventListener('popstate', e => {
  if (overlay && overlay.classList.contains('open')) {
    closeItem();
  }
});

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && overlay && overlay.classList.contains('open')) closeItem();
});

/* ═══ ITEM DETAIL RENDERER ═══ */
function renderItemPage(sectionKey, row, slug) {
  if (!itemContent) return;
  const imgUrl     = getImage(row);
  const alt        = get(row, 'alt')     || 'Artwork';
  const title      = get(row, 'title')   || 'Item';
  const pinDesc    = get(row, 'pinDesc') || '';
  const etsyUrl    = get(row, 'etsy')    || '#';
  const tagsRaw    = get(row, 'tags');
  const catLabel   = row._catLabel || '';

  const tagsHtml = tagsRaw
    ? tagsRaw.split(',').map(t => `<span class="item-tag">${t.trim()}</span>`).join('')
    : '';

  const itemPageUrl = window.location.origin + window.location.pathname + '?item=' + sectionKey + '/' + slug;
 // Remove the useless '&title=' and cleanly format the description
const formattedDesc = pinDesc ? `${title} | ${pinDesc}` : title;

const pinSaveUrl  = 'https://www.pinterest.com/pin/create/button/'
  + '?url='         + encodeURIComponent(itemPageUrl)
  + '&media='       + encodeURIComponent(imgUrl)
  + '&description=' + encodeURIComponent(formattedDesc);

  itemContent.innerHTML = `
    <div class="item-layout">
      <div class="item-image-wrap">
        <img src="${imgUrl}" alt="${alt}"
             data-pin-url="${itemPageUrl}"
             data-pin-media="${imgUrl}"
             data-pin-description="${pinDesc}"
             data-pin-title="${title}" loading="eager">
      </div>
      <div class="item-info">
        ${catLabel ? `<p class="item-collection-label">${catLabel}</p>` : ''}
        <h2 class="item-title">${title}</h2>
        ${pinDesc ? `<p class="item-description">${pinDesc}</p>` : ''}
        ${tagsHtml ? `<div class="item-tags">${tagsHtml}</div>` : ''}
        <hr class="item-divider">
        <div class="item-actions">
          ${etsyUrl !== '#' ? `
          <a href="${etsyUrl}" class="item-btn-etsy" target="_blank" rel="noopener">
            <i class="fa-brands fa-etsy"></i> Shop on Etsy
          </a>` : ''}
          <button onclick="window.open('${pinSaveUrl}','Pinterest','width=600,height=700');return false;" class="item-btn-pin">
            <i class="fa-brands fa-pinterest"></i> Save to Pinterest
          </button>
        </div>
      </div>
    </div>
  `;
  if (window.PinUtils) window.PinUtils.build();
}

/* ═══ DATA LOADER ═══ */
const skeletonsHtml = Array(8).fill('<div class="skel-item" aria-hidden="true"></div>').join('');

function loadSection(sectionKey, gridId, tabsId, onReady) {
  const sec  = SECTIONS[sectionKey];
  const grid = document.getElementById(gridId);
  if (grid) grid.innerHTML = skeletonsHtml;

  Papa.parse(SHEET_BASE + sec.gid, {
    download: true, header: true, skipEmptyLines: true,
    complete: r => {
      parseData(sectionKey, r.data);
      if (sec.hasCategories && tabsId) renderTabs(sectionKey, tabsId, gridId);
      if (onReady) onReady();
    },
    error: () => {
      if (grid) grid.innerHTML = '<p style="padding:40px;color:var(--ink-soft);grid-column:1/-1">Gallery unavailable. Please try again later.</p>';
    }
  });
}

function parseData(sectionKey, rows) {
  const sec = SECTIONS[sectionKey];
  const sd  = sectionData[sectionKey];
  sd.categoryOrder = [];
  sd.categoryMap   = {};
  sd.flatRows      = [];
  sd.store         = {};

  rows.forEach(row => {
    const img = getImage(row);
    if (!img) return;
    const ps = itemSlug(row);
    row._slug    = ps;
    row._section = sectionKey;

    if (sec.hasCategories) {
      const cat = get(row, 'category');
      if (!cat) return;
      const cs = catSlug(cat);
      row._catSlug  = cs;
      row._catLabel = cat;
      sd.store[ps]  = row;
      if (!sd.categoryMap[cs]) {
        sd.categoryMap[cs] = { label: cat, rows: [] };
        sd.categoryOrder.push(cs);
      }
      sd.categoryMap[cs].rows.push(row);
    } else {
      row._catSlug  = '';
      row._catLabel = '';
      sd.store[ps]  = row;
      sd.flatRows.push(row);
    }
  });
  sd.loaded = true;
}

/* Build category tabs (prints only) */
function renderTabs(sectionKey, tabsId, gridId) {
  const sd     = sectionData[sectionKey];
  const tabsEl = document.getElementById(tabsId);
  if (!tabsEl) return;
  tabsEl.innerHTML = '';

  sd.categoryOrder.forEach(cs => {
    const { label } = sd.categoryMap[cs];
    const btn = document.createElement('button');
    btn.className = 'gallery-tab';
    btn.dataset.catSlug = cs;
    btn.textContent = label;
    btn.addEventListener('click', () => switchTab(sectionKey, cs, tabsId, gridId));
    tabsEl.appendChild(btn);
  });
}

function switchTab(sectionKey, cs, tabsId, gridId) {
  const sd = sectionData[sectionKey];
  sd.currentCat = cs;

  const tabsEl = document.getElementById(tabsId);
  if (tabsEl) {
    tabsEl.querySelectorAll('.gallery-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.catSlug === cs);
    });
  }
  buildGallery(sectionKey, sd.categoryMap[cs]?.rows || [], gridId);
}

/* Build gallery grid */
function buildGallery(sectionKey, rows, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = '';

  if (!rows.length) {
    grid.innerHTML = '<p style="padding:40px;color:var(--ink-soft);grid-column:1/-1">No items in this collection yet.</p>';
    return;
  }

  rows.forEach((row, i) => {
    const slug        = row._slug;
    const imgUrl      = getImage(row);
    const alt         = get(row, 'alt')     || 'Artwork';
    const etsyUrl     = get(row, 'etsy')    || '#';
    const title       = get(row, 'title')   || 'Item';
    const pinDesc     = get(row, 'pinDesc') || '';
    const isBestSeller = (row['BEST_SELLER'] || '').trim().toLowerCase() === 'yes';
    const itemPageUrl = window.location.origin + window.location.pathname + '?item=' + sectionKey + '/' + slug;

    const delayClass = i % 4 !== 0 ? ` reveal-d${Math.min(i % 4, 4)}` : '';
    const item = document.createElement('article');
    item.className = 'gallery-item reveal' + delayClass;
    item.setAttribute('role', 'listitem');

    item.innerHTML = `
      <img src="${imgUrl}" alt="${alt}"
           data-pin-url="${itemPageUrl}"
           data-pin-media="${imgUrl}"
           data-pin-description="${pinDesc}"
           data-pin-title="${title}" loading="lazy">
      ${isBestSeller ? `<img src="https://ik.imagekit.io/ngoo36zmk/IMG_7886.gif" alt="Best Seller" class="best-seller-badge" aria-label="Best Seller">` : ''}
      <div class="gallery-overlay" aria-hidden="true">
        <div class="gallery-overlay-links">
          ${etsyUrl !== '#' ? `<a href="${etsyUrl}" class="ov-link etsy" target="_blank" rel="noopener" tabindex="-1">
            <i class="fa-brands fa-etsy"></i> Etsy
          </a>` : ''}
          <span class="ov-link pin" tabindex="-1">
            <i class="fa-brands fa-pinterest"></i> Pin
          </span>
        </div>
      </div>
    `;

    item.addEventListener('click', e => {
      if (e.target.closest('.ov-link.etsy')) return;
      e.preventDefault();
      openItem(sectionKey, slug);
    });

    grid.appendChild(item);
  });

  observeReveals(grid);
  fadeImages(grid);
  if (window.PinUtils) window.PinUtils.build();
}

/* ═══ AUTO-INIT ON DOM READY ═══ */
window.addEventListener('DOMContentLoaded', () => {
  observeReveals();

  // hide loader
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      // brief delay so fonts don't flash
      setTimeout(() => loader.classList.add('gone'), 120);
    });
    // fallback: if load already fired
    if (document.readyState === 'complete') {
      setTimeout(() => loader.classList.add('gone'), 120);
    }
  }
});
