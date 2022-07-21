const templeURL = 'https://pulidoesr.github.io/wdd230/lesson12/data/ldstemples.json';
const container = document.getElementById("temple_list");
let line = 0;
// Read the objects
fetch(templeURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });
  
function displayTemples(temples) {
  // Create elements to add to the documewnt
  let card = document.createElement('section');
  let tname = document.createElement('h2');
  let address = document.createElement('p');
  let city_state_country = document.createElement('p');
  let phone = document.createElement('p');
  let webpage = document.createElement('a');
  let select = document.createElement('button');
  
  line = line + 1;
  
// Change the textContent property of the h2 element to contain name of Temple
tname.textContent = `${temples.Temple}`;

// Change the textContent property of the additional element to contain the data
address.textContent= `${temples.Address}`;
city_state_country.textContent = `${temples.City}, ${temples.State} ${temples.Country}`;
phone.textContent= `${temples.Phone}`;
webpage.textContent= '   Webpage  ';
select.textContent= '    Select   ';


// Set up Attributes
webpage.setAttribute('href', `${temples.Link}`);
webpage.setAttribute('target', '_blank');
select.setAttribute('class', `button${line} selected`);
select.setAttribute('id', 'selectedtemple')
card.setAttribute('class',"individual");

 // Add/append the section(card) with the h2 element
 card.appendChild(tname);
 card.appendChild(address);
 card.appendChild(city_state_country);
 card.appendChild(phone);
 card.appendChild(webpage);
 card.appendChild(select);

 // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('#temple_list').appendChild(card);
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#temple_list");

// Grid Button
gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

// List Button
listbutton.addEventListener("click", showList); 
function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

// Selected Button
const templelist = document.querySelector("#temple_list");
templelist.addEventListener("clik", () => {
const tname = document.querySelector(templelist.section.Temple);
  console.log(tname);
  localStorage.setItem("temple-selected",tname);
  })

// Count People
function countPeople() {
  document.getElementById("people").stepUp(5);
}

// Count Rooms
function countRooms() {
  document.getElementById("rooms").stepUp(5);
}