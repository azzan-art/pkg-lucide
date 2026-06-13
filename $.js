import * as lucide from "https://cdn.jsdelivr.net/npm/lucide@latest/dist/esm/lucide.js";

function renderIcons() {
  lucide.createIcons();
}

renderIcons();

new MutationObserver(renderIcons).observe(document.body, {
  childList: true,
  subtree: true
});
