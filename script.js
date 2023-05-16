let scrollPosition = 0;
let animationId;

function scrollImages() {
  scrollPosition++;
  document.querySelector('.image-scroll').scrollLeft = scrollPosition;

  animationId = requestAnimationFrame(scrollImages);
}

function stopScroll() {
  cancelAnimationFrame(animationId);
}

function resumeScroll() {
  scrollImages();
}

scrollImages();
