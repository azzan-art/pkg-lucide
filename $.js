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

  function renderIcons() {
    lucide.createIcons();
  }

  function init() {
    renderIcons();

    new MutationObserver(renderIcons).observe(document.body, {
      childList: true,
      subtree: true
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
