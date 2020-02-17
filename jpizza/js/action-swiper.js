var mySwiper = new Swiper('.action-swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.act-right-arrow',
        prevEl: '.act-left-arrow',
    },
    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
});