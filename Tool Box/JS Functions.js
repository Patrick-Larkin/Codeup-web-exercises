	//Retrieve element by tag
	let div = document.getElementsByTagName("div");
	//loop through each instance
	for (let i = 0; i < div.length; i++) {
		// Performs three tasks

	div[i].innerText = capitalize(string1) + " " + capitalize(string2);
	}
	//function
	function capitalize(string?) {
	return string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
	}