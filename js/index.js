window.onload = function() {
	var ul = document.getElementsByTagName("ul")[0];
	var navToggle = document.getElementsByClassName("showMenu");
	navToggle[0].addEventListener("click", function(e) {
		e.preventDefault();
		if (ul.className == "") {
			ul.className = "expanded";
		} else {
			ul.className = "";
		}
	}, false);
}