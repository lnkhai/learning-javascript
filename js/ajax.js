// function getHTTPObject() {
// 	var xhr = new XMLHttpRequest;

// 	return xhr;
// }

// function ajaxCall(dataURL, outputElement, callback) {
// 	var request = getHTTPObJect();
// 	outputElement.innerHTML = "Loading...";
// 	request.onreadystatechange = function() {
// 		if (request.readyState === 4 && request.status === 200) {
// 			console.log(request.responseText);
// 			var contacts = JSON.parse(request.responseText);
// 			if (typeof callback === "function") {
// 				callback(contacts);
// 			}
// 		}
// 	}

// 	request.open("GET", dataURL, true);
// 	request.send(null);
// }