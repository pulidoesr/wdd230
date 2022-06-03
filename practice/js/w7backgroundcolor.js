const body = document.querySelector("body");
const color = document.querySelector("#color");
const hexColor = document.querySelector("#hexColor");

if (!localStorage.getItem("bgcolor")) {
	populateStorage();
} else {
	setStyles();
}

function populateStorage() {
	localStorage.setItem("bgcolor", color.value);
	setStyles();
}

function setStyles() {
	let currentColor = localStorage.getItem("bgcolor");
	hexColor.textContent = `Hex: ${currentColor}`;
	body.style.background = currentColor;
}

color.addEventListener("input", populateStorage);
