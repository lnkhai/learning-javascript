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

var btn = document.getElementById("get-all");
var searchField = document.getElementById("q");
var searchForm = document.getElementById("search-form");
var target = document.getElementById("output");
var getAllButton = document.getElementById("get-all");
var count = contacts.addressBook.length;
var book = contacts.addressBook;

var adr = {
	getAllContacts : function() {

		var i;
		target.innerHTML = "";

		if (count > 0) {
			for (i=0; i<count;i=i+1) {
				var obj = book[i];
				target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a><p>';
			}
		}
	},

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
		event.preventDefault();
		var target = document.getElementById("output");
		var book = contacts.addressBook;
		var count = book.length;
		var i;
		var searchValue = searchField.value;
		target.innerHTML = "";

		if (count > 0 && searchValue !== "") {
			for (i = 0; i < count; i++) {
				var obj = contacts.addressBook[i], isItFound = obj.name.indexOf(searchValue);
				if (isItFound !== -1) {
					target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a><p>';
				}
			}
		}
	}
}

btn.addEventListener("click", adr.getAllContacts, false);
searchField.addEventListener("focus", adr.addActiveSection, false);
searchField.addEventListener("blur", adr.removeActiveSection, false);
searchForm.addEventListener("mouseover", adr.addHoverClass, false);
searchForm.addEventListener("mouseout", adr.removeHoverClass, false);
searchForm.addEventListener("submit", adr.search, false);
