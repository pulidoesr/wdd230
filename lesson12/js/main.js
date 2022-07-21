function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
  
}
const x = document.getElementById('hamburgerBtn');
  x.onclick = toggleMenu;

// Last date modified
let oLastModif = new Date(document.lastModified);
document.getElementById('lastmodified').textContent = oLastModif;

cityselected();

// Last city selected
function cityselected() {
let city = window.localStorage.getItem("city");
let state = window.localStorage.getItem("state");
let country = window.localStorage.getItem("country");

const scity = document.querySelector(".scity");
const sstate = document.querySelector(".sstate");
const scountry = document.querySelector(".scountry");

if (city != null) { 
  scity.textContent = city;
}
if (state != null) {
  sstate.textContent = state;
}
if (country != null) {
  scountry.textContent = country;
}

}

