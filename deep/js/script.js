function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

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

let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const classIbg = document.querySelector('.ibg');

if (isIOS && isSafari) {
	// iOS Safari: Do not add background-attachment: fixed
	classIbg.classList.add('ios-safari');
} else {
	// Not iOS Safari: Add background-attachment: fixed
	classIbg.classList.add('fixed-background');
}
