var mySwiper = new Swiper('.pizza-swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.pizza-right-arrow',
        prevEl: '.pizza-left-arrow',
    },
    breakpoints:  {
        620: {
        slidesPerView: 2,
        },
        1150: {
            slidesPerView: 4,
        }
    }
});