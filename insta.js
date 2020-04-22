let mainNavi = document.getElementById('js-main-nav');

let navPh = document.getElementById('js-navbar-toggle');

navPh = addEventListener('click', function()
{
	mainNavi.classList.toggle('active');
});