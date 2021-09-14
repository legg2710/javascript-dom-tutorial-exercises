let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let myLi = document.createElement("LI");
	myLi.innerHTML = "Fourth element";
	let myList = document.querySelector("#myList");
	myList.appendChild(myLi);
});
