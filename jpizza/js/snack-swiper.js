var mySwiper = new Swiper('.snack-swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.snack-right-arrow',
        prevEl: '.snack-left-arrow',
    },
    breakpoints: {
        620: {
            slidesPerView: 2,
        },
        1150: {
            slidesPerView: 4,
        }
    }
});