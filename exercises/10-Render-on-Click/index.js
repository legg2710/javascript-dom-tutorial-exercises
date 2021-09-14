let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let Div = document.createElement("div");
	Div.style.background = "yellow";
	Div.innerHTML = "Hello World";
	document.body.appendChild(Div);
});
