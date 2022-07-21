let wfromdate = window.localStorage.getItem("fromdate");
let wtodate = window.localStorage.getItem("todate");
const sfromdate = document.querySelector(".fromdate")
const stodate = document.querySelector(".todate");
if (wfromdate != null) {
  sfromdate.value = wfromdate;
  sfromdate.textContent = wfromdate;
}
if (wtodate != null) {
  stodate.value = wtodate;
  stodate.textContent = wtodate;
}