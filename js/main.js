$(function() {
  $(".slider").slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="prev-next" /></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev-arrow" /></button>',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 441,
        settings: {
          arrows: false
        }
      }
    ]
  });
});
