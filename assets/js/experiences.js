(function () {
  var wrap = document.querySelector(".exp-grid-wrap");
  var grid = document.querySelector(".exp-grid");
  if (!wrap || !grid) return;

  var offset = 0;

  function maxOffset() {
    return Math.max(0, grid.scrollWidth - wrap.clientWidth);
  }

  function setOffset(next) {
    offset = Math.max(0, Math.min(maxOffset(), next));
    grid.style.transform = "translateX(" + (-offset) + "px)";
  }

  wrap.addEventListener("wheel", function (event) {
    if (maxOffset() <= 0) return;
    var delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (!delta) return;
    event.preventDefault();
    setOffset(offset + delta);
  }, { passive: false });

  var dragging = false;
  var moved = false;
  var startX = 0;
  var startOffset = 0;

  wrap.addEventListener("pointerdown", function (event) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging = true;
    moved = false;
    startX = event.clientX;
    startOffset = offset;
    wrap.setPointerCapture(event.pointerId);
  });

  wrap.addEventListener("pointermove", function (event) {
    if (!dragging) return;
    var dx = event.clientX - startX;
    if (Math.abs(dx) > 6) moved = true;
    if (!moved) return;
    setOffset(startOffset - dx);
    grid.classList.add("is-dragging");
  });

  function endDrag() {
    dragging = false;
    grid.classList.remove("is-dragging");
  }

  wrap.addEventListener("pointerup", endDrag);
  wrap.addEventListener("pointercancel", endDrag);

  wrap.addEventListener("click", function (event) {
    if (!moved) return;
    event.preventDefault();
    event.stopPropagation();
    moved = false;
  }, true);

  window.addEventListener("resize", function () {
    setOffset(offset);
  });
})();
