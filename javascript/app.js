const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2000,
     
    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 1024px
      1000: {
        slidesPerView: 3,
        spaceBetween: 50
      },
    },
    autoply: {
      delay: 5000,
    },
   
  });





  