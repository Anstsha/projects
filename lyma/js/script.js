function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header, .header__logo, .header__actions').toggleClass('act')
	});
});

new Swiper('.brands-slider', {
	pagination: {
		el: '.swiper-pagination',
		
		clickable: true,
	},

	slidesPerView: 3.75,
	spaceBetween: 40,
	sliderPerGroup: 1,
	autoplay: {
		delay: 800,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	speed: 2000,
	breakpoints:{
		320: {
			slidesPerView: 1,
			spaceBetween: 50,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 2.75,
			spaceBetween: 20,
		},
		1250: {
			slidesPerView: 3.75,
			spaceBetween: 50,

		},
	}
});