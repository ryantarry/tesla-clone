const openMenu = () => {
	document.querySelector('.blur').className = 'blur active';
	document.querySelector('aside').className = 'active';
}

const closeMenu = () => {
	document.querySelector('.blur').className = 'blur';
	document.querySelector('aside').className = '';
}

document.getElementById('menu-link').onclick = e => {
	e.preventDefault();
	openMenu();
}

document.querySelector('aside button.exit').onclick = e => {
	closeMenu();
}

document.querySelector('.blur').onclick = e => {
	closeMenu();
}
