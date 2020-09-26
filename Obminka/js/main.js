

document.getElementById("hbutt").onclick = function (event) {
	var target = event.target;
	var menuWrapper = document.getElementById("menu-wrapper");
	menuWrapper.classList.remove('hide');
	menuWrapper.classList.add('show')
}
