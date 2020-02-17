var mySwiper = new Swiper('.drink-swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.drink-right-arrow',
        prevEl: '.drink-left-arrow',
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