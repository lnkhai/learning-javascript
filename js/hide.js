var buttonHide = document.getElementById("hide"),
	target = document.getElementById("target"),
	buttonShow = document.getElementById("show");

function hide() {
	target.setAttribute("class", "hide");
}

function show() {
	target.setAttribute("class", "show");
}

buttonHide.addEventListener("click", hide, false);
buttonShow.addEventListener("click", show, false);