import { createIcons, icons } from "https://cdn.jsdelivr.net/npm/lucide@latest/dist/esm/lucide.js";

function renderIcons() {
  createIcons({ icons });
}

renderIcons();

new MutationObserver(renderIcons).observe(document.body, {
  childList: true,
  subtree: true
});
