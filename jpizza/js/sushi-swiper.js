var mySwiper = new Swiper('.sushi-swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.sushi-right-arrow',
        prevEl: '.sushi-left-arrow',
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