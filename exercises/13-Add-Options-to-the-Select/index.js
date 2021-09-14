window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	// your code here

	let slct = document.querySelector("#mySelect");

	for (let i = 0; i < countries.length; i++) {
		let option = document.createElement("option");
		option.text = countries[i];
		slct.add(option);
		document.querySelector("#mySelect").appendChild(option);
	}
	slct.addEventListener("change", function() {
		alert(event.target.value);
	});
};
