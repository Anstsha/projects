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