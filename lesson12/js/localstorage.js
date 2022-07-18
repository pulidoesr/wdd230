
// Local Storage - Visits
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// get the number of milliseconds (date in milliseconds)
let numMills = Number(window.localStorage.getItem("mills-ls"));

// First visit
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;

// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show number of days //
if (numMills !== 0) {  
    numDays = Math.round((Date.now() - numMills) / 86400000); 
  	todayDisplay.textContent = numDays;
} else {
	todayDisplay.textContent = `This is your first visit!`;
}

// store the current date in number of Milliseconds 
numMills = Date.now();
localStorage.setItem("mills-ls", numMills);