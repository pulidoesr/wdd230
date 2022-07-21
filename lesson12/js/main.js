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
let wfromdate = window.localStorage.getItem("fromdate");
let wtodate = window.localStorage.getItem("todate");
const scity = document.querySelector(".scity");
const sstate = document.querySelector(".sstate");
const scountry = document.querySelector(".scountry");
const sfromdate = document.querySelector(".fromdate")
const stodate = document.querySelector(".todate");
if (city != null) { 
  scity.textContent = city;
}
if (state != null) {
  sstate.textContent = state;
}
if (country != null) {
  scountry.textContent = country;
}
if (wfromdate != null) {
  sfromdate.value = wfromdate;
  sfromdate.textContent = wfromdate;
}
if (wtodate != null) {
  stodate.value = wtodate;
  stodate.textContent = wtodate;
}
}

var sfromdate = document.querySelector("#fromdate")
var stodate = document.querySelector("#todate");
if (sfromdate > stodate) {
  alert("Incorrect date");
}
sessionStorage.setItem("fromdate",sfromdate);
sessionStorage.setItem("todate", stodate);
