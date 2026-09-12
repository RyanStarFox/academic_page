(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    if (button) {
      var next = theme === "dark" ? "light" : "dark";
      button.setAttribute("aria-label", "Switch to " + next + " mode");
      button.setAttribute("title", "Switch to " + next + " mode");
    }
  }

  if (button) {
    button.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (event) {
    try {
      if (!localStorage.getItem("theme")) {
        setTheme(event.matches ? "dark" : "light");
      }
    } catch (e) {}
  });
})();
