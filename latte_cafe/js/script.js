document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;
	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open')
	}

	if (targetElement.closest('.btn')) {
		const btnItem = targetElement.closest('.btn');
		if (!btnItem.classList.contains('active')) {
			const activeBtnItem = document.querySelector('.btn.active');
			activeBtnItem.classList.remove('active');
			btnItem.classList.add('active');

			const menuItems = document.querySelectorAll('.menu__image img');
			const activeMenuItem = document.querySelector('.menu__image img.active');

			activeMenuItem.classList.remove('active');
			menuItems[getIndex(btnItem)].classList.add('active');
		}
	}
}

function getIndex(el) {
	return Array.from(el.parentNode.children).indexOf(el);
}

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();