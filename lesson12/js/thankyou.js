// read the url parameters coming from previous page  
// fname=Eduardo&lname=Pulido&email=eduardo.pulido%40frontiercoop.com&phone=3192277996
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const wfname = urlParams.get('fname');
const wlname = urlParams.get('lname');
const wemail = urlParams.get('email')
var fname = document.querySelector(".fname");
var lname = document.querySelector(".lname");
var email = document.querySelector(".femail");
fname.textContent = wfname;
lname.textContent = wlname;
email.textContent = wemail;