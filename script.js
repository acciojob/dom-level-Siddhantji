//your JS code here. If required.
let level = document.getElementById("level");
let count = 0;

let current = level;
while(current !== document.documentElement){
	count++;
	current = current.parentNode;
}

alert(`The level of the element is: ${count}`);