const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: false,
  mousewheel: true,
  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
});
