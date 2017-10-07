export const burgerToggle = () => {
	const linksElem = document.querySelector('.topNarrowLinks');
	const lines = document.querySelectorAll('.line');
	lines[0].classList.toggle('animate0');
	lines[1].classList.toggle('hide');
	lines[2].classList.toggle('animate2');
	linksElem.classList.toggle('show');
}

export const menuLinkClick = (e) => {
	e.stopPropagatin();
	e.nativeEvent.stopImmediatePropagation();
}
