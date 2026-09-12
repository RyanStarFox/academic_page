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

  function sizePublicationTeasers() {
    document.querySelectorAll(".pub-row").forEach(function (row) {
      var img = row.querySelector(".teaser");
      var text = row.querySelector(".col-sm-9");
      if (!img || !text) return;
      img.style.height = "";
      img.style.width = "";
      if (window.matchMedia("(max-width: 480px)").matches) return;
      var height = text.offsetHeight;
      if (height < 80) return;
      img.style.height = height + "px";
      img.style.width = "auto";
    });
  }

  window.addEventListener("load", sizePublicationTeasers);
  window.addEventListener("resize", sizePublicationTeasers);
  document.querySelectorAll(".teaser").forEach(function (img) {
    img.addEventListener("load", sizePublicationTeasers);
  });
  sizePublicationTeasers();
})();
