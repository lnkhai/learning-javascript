function doTheThing() {
	alert("This is the thing!");
}

var elem = document.getElementById("about");
elem.addEventListener("click", doTheThing, false);