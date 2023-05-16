window.addEventListener('DOMContentLoaded', function() {
  const imageScroll = document.querySelector('.image-scroll');
  let isHovered = false;
  let scrollAmount = 1;

  function scrollImages() {
    if (!isHovered) {
      imageScroll.scrollLeft += scrollAmount;
      scrollAmount *= -1;
    }
    requestAnimationFrame(scrollImages);
  }

  imageScroll.addEventListener('mouseover', function() {
    isHovered = true;
  });

  imageScroll.addEventListener('mouseout', function() {
    isHovered = false;
  });

  scrollImages();
});
