(() => {
  function loadLucide(callback) {
    if (window.lucide) return callback();

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/lucide@latest";
    script.onload = callback;
    document.head.appendChild(script);
  }

  function renderIcons() {
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function init() {
    renderIcons();

    new MutationObserver(renderIcons).observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function startWhenReady() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }

  loadLucide(startWhenReady);
})();
