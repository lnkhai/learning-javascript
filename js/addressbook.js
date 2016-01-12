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

var adr = {
	getAllContacts : function() {
		var target = document.getElementById("output");
		var book = contacts.addressBook;
		var count = book.length;
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
	}

}

var btn = document.getElementById("get-all");
var searchField = document.getElementById("q");
btn.addEventListener("click", adr.getAllContacts, false);
searchField.addEventListener("focus", adr.addActiveSection, false);
searchField.addEventListener("blur", adr.removeActiveSection, false);
