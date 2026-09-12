(function () {
  var wrap = document.querySelector(".exp-grid-wrap");
  var scroller = document.querySelector(".exp-scroll");
  var grid = document.querySelector(".exp-grid");
  if (!wrap || !scroller || !grid) return;

  var dragging = false;
  var moved = false;
  var startX = 0;
  var startScroll = 0;

  wrap.addEventListener("pointerdown", function (event) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging = true;
    moved = false;
    startX = event.clientX;
    startScroll = scroller.scrollLeft;
    wrap.setPointerCapture(event.pointerId);
  });

  wrap.addEventListener("pointermove", function (event) {
    if (!dragging) return;
    var dx = event.clientX - startX;
    if (Math.abs(dx) > 6) moved = true;
    if (!moved) return;
    scroller.scrollLeft = startScroll - dx;
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
})();
