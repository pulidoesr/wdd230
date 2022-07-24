
// read the url parameters coming from previous page  
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pfromdate = urlParams.get('fromdate')
const ptodate = urlParams.get('todate')
var fromdate = document.querySelector(".fromdate");
var todate = document.querySelector(".todate");
fromdate.textContent = pfromdate;
todate.textContent = ptodate;

