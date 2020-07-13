//Select DOM items (UI structure)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');

//Setting the initial state of the menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItem.forEach(item => item.classList.add('show'));
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItem.forEach(item => item.classList.remove('show'));
		showMenu = false;
	}
}

function myFunction1() {
	var dots = document.getElementById('dots1');
	var moreText = document.getElementById('more1');
	var btnText = document.getElementById('myBtn1');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}
function myFunction2() {
	var dots = document.getElementById('dots2');
	var moreText = document.getElementById('more2');
	var btnText = document.getElementById('myBtn2');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}
function myFunction3() {
	var dots = document.getElementById('dots3');
	var moreText = document.getElementById('more3');
	var btnText = document.getElementById('myBtn3');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}
function myFunction4() {
	var dots = document.getElementById('dots4');
	var moreText = document.getElementById('more4');
	var btnText = document.getElementById('myBtn4');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}
function myFunction5() {
	var dots = document.getElementById('dots5');
	var moreText = document.getElementById('more5');
	var btnText = document.getElementById('myBtn5');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}
function myFunction6() {
	var dots = document.getElementById('dots6');
	var moreText = document.getElementById('more6');
	var btnText = document.getElementById('myBtn6');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}
