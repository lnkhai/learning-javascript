function getHTTPObject() {
	var xhr = new XMLHttpRequest;

	return xhr;
}

function ajaxCall(dataURL) {
	var request = getHTTPObJect();

	request.onreadystatechange = function() {
		if (request.readyState === 4 && request.status === 200) {
			console.log(request.responseText);
		}
	}

	request.open("GET", dataURL, true);
	request.send(null);
}