var swiper2 = new Swiper(".swipermj", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",   
        clickable: true,
    },
    breakpoints: {
        900: {
            slidesPerView: 2
        },
        600: {
            slidesPerView: 1
        }
    }
});
