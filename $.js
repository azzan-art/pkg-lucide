(() => {
  if (window.__lucideAutoLoaded) return;
  window.__lucideAutoLoaded = true;

  function loadLucide(callback) {
    if (window.lucide) return callback();

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.min.js";
    script.onload = callback;
    document.head.appendChild(script);
  }

  let scheduled = false;

  function renderIcons() {
    if (!window.lucide) return;

    if (scheduled) return;
    scheduled = true;

    requestAnimationFrame(() => {
      lucide.createIcons();
      scheduled = false;
    });
  }

  function init() {
    renderIcons();

    new MutationObserver((mutations) => {
      let shouldUpdate = false;

      for (const m of mutations) {
        if (m.type === "childList") shouldUpdate = true;
        if (m.type === "attributes") shouldUpdate = true;
      }

      if (shouldUpdate) renderIcons();
    }).observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-lucide"]
    });
  }

  loadLucide(() => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  });
})();
