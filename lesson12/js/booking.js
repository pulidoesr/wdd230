const requestURL = 'https://pulidoesr.github.io/wdd230/lesson12/data/ldstemples.json';
const container = document.getElementById("temple_list");
// Read the objects
fetch(requestURL)
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
  let h2 = document.createElement('h2');
  let logo = document.createElement('img');
  let address = document.createElement('p');
  let country = document.createElement('p');
  let state = document.createElement('p');
  let city = document.createElement('p');
  let phone = document.createElement('p');
  let webpage = document.createElement('a');
  
// Change the textContent property of the h2 element to contain name of company
h2.textContent = `${temples.Temple}`;

// Change the textContent property of the additional element to contain the data
address.textContent= `${temples.Address}`;
city.textContent= `${temples.City}`;
state.textContent= `${temples.State}`;
country.textContent= `${temples.Country}`;
phone.textContent= `${temples.Phone}`;
webpage.textContent= `${temples.Link}`;


// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
// logo.setAttribute('src', `images/${temple.logo}`);
// logo.setAttribute('style', `width:80px;height:85px`);
// webpage.setAttribute('href', `https://${temple.webpage}`);
card.setAttribute('class',"individual");


 // Add/append the section(card) with the h2 element
 card.appendChild(h2);
 card.appendChild(address);
 card.appendChild(city);
 card.appendChild(state);
 card.appendChild(country);
 card.appendChild(phone);
 card.appendChild(webpage);
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

