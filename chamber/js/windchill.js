const parent = document.getElementById("wind_chill"); // selecting parent
const temperature = document.getElementById("t"); // temperature
const speed = document.getElementById("s"); // wind speed
const oldElement = document.getElementById("f"); // windchill old
const newElement = document.createElement("f"); // windchill new
let f = 0 // wind chill factor
let t = parseFloat(temperature.innerText)
let s = parseFloat(speed.innerText)
let temp = parent.parentNode;
let string = ""
s = s * 0.621371; // speed from km. to miles
if (t <= 50 && s > 3) {
      f = 35.74 + 0.6215*t  -35.75*s**0.16  + 0.4275*t*s**0.16;
      f = f.toFixed(2);
      string = f.toString();
      newElement.innerHTML = string;
} else {
      newElement.innerHTML = "N/A";
}
if (oldElement.hasChildNodes()) {
    parent.replaceChild(newElement, oldElement);
} else {
    parent.append(newElement);
}
