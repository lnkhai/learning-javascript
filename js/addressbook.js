var contacts = {
	"addressBook": [
		{
			"name": "hillisha",
			"email": "hill@example.com",
		},
		{
			"name": "paul",
			"email": "cleveland@example.com",
		},
		{
			"name": "vishaal",
			"email": "vish@example.com",
		},
		{
			"name": "mike",
			"email": "grandy@example.com",
		},
		{
			"name": "jamie",
			"email": "dusted@example.com",
		},
	]
};

function getHTTPObject() {
	var xhr = new XMLHttpRequest;

	return xhr;
}

function ajaxCall(dataURL, outputElement, callback) {
	var request = getHTTPObject();
	outputElement.innerHTML = "Loading...";
	request.onreadystatechange = function() {
		if (request.readyState === 4 && request.status === 200) {
			console.log(request.responseText);
			var contacts = JSON.parse(request.responseText);
			if (typeof callback === "function") {
				callback(contacts);
			}
		}
	}

	request.open("GET", dataURL, true);
	request.send(null);
}

var btn = document.getElementById("get-all");
var searchField = document.getElementById("q");
var searchForm = document.getElementById("search-form");
var target = document.getElementById("output");
var getAllButton = document.getElementById("get-all");
var count = contacts.addressBook.length;
var book = contacts.addressBook;

var adr = {
	addActiveSection : function() {
		this.parentNode.setAttribute("class", "active");
	},

	removeActiveSection : function() {
		this.parentNode.removeAttribute("class");
	},

	addHoverClass : function() {
		searchForm.setAttribute("class", "hovering");
	},

	removeHoverClass : function() {
		searchForm.removeAttribute("class");
	},

	search : function(event) {
		var output = document.getElementById("output");
		ajaxCall('data/contacts.json', output, function(data) {
			var searchValue = searchField.value,
				addrBook = data.addrBook,
				count = addrBook.length,
				i;
			event.preventDefault();
			target.innerHTML = "";

			if (count > 0 && searchValue !== "") {
				for (i = 0; i < count; i++) {
					var obj = addrBook[i], 
						isItFound = obj.name.indexOf(searchValue);
					if (isItFound !== -1) {
						target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a><p>';
					}
				}
			}
		});
	},

	getAllContacts : function() {
		var output = document.getElementById("output");
		ajaxCall('data/contacts.json', output, function(data) {
			var addrBook = data.addressBook,
				count = addrBook.length,
				i;
			target.innerHTML = ""
			if (count > 0) {
				for (i=0; i<count;i=i+1) {
					var obj = addrBook[i];
					target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a><p>';
				}
			}
		});
	},

	setActiveSection : function() {
		this.parentNode.setAttribute("class", "active");
	}
}

btn.addEventListener("click", adr.getAllContacts, false);
searchField.addEventListener("focus", adr.addActiveSection, false);
searchField.addEventListener("blur", adr.removeActiveSection, false);
searchForm.addEventListener("mouseover", adr.addHoverClass, false);
searchForm.addEventListener("mouseout", adr.removeHoverClass, false);
searchForm.addEventListener("submit", adr.search, false);
