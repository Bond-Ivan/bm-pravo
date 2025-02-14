export const swiper = new Swiper('.swiper-team', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination-team',
    },

    breakpoints: {
		1200: {
            slidesPerView: 2,
		},
	},
});

export const swiperTeam = new Swiper('.swiper-partners', {
    loop: true,
    slidesPerView: "auto",
	spaceBetween: 20,
	centerSlides: true,

    pagination: {
        el: '.swiper-pagination-partners',
    },
});