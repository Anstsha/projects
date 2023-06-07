document.addEventListener('click', function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}

	e.preventDefault();
});

var swiper = new Swiper('.trust__slider', {
	slidesPerView: 5,
	spaceBetween: 75,
	speed: 1000,
	autoplay: {
		delay: 1500,
		stopOnLastSlide: false,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		425: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 40
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 40
		}
	}
});

let options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.3,
};

let callback = (entries) => {
	entries.forEach((entry) => {
		const targetElement = entry.target;
		if (entry.isIntersecting && !targetElement.classList.contains('watched')) {
			targetElement.classList.add('watched');
		}
	});
}

let observer = new IntersectionObserver(callback, options);
let items = document.querySelectorAll("[data-watch]");
items.forEach(item => {
	observer.observe(item);

});