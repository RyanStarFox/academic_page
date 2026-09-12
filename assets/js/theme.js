(function () {
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function applySystemTheme() {
    root.setAttribute("data-theme", media.matches ? "dark" : "light");
  }

  applySystemTheme();

  if (media.addEventListener) {
    media.addEventListener("change", applySystemTheme);
  } else if (media.addListener) {
    media.addListener(applySystemTheme);
  }
})();
