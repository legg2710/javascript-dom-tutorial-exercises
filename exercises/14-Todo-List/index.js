let ph = document.querySelector("#addToDo");
ph.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		addtask(ph.value);
	}
});
//let lst = document.querySelectorAll(".fa-trash");
/* lst.addEventListener("click", function() {
	alert("success!);
}); */

let task = document.querySelector("ul");
task.addEventListener("click", function(e) {
	var li = e.target.closest("li");
	var nodes = Array.from(task.children);
	var index = nodes.indexOf(li);
	alert(index);
	deletetask(index);
});

function addtask(valor) {
	let list = document.querySelector("ul");
	let li = document.createElement("li");
	li.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + valor;
	list.appendChild(li);
}
function deletetask(index) {
	let list = document.querySelector("ul");
	list.removeChild(list.childNodes[index]);
}
