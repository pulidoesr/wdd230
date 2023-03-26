const requestURL = 'https://pulidoesr.github.io/wdd230/chamber/data/data_ps.json';
const container = document.getElementById("directory_list");
// Read the objects
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const children = jsonObject['children'];
    children.forEach(displayChildren);
  });

function displayChildren(children) {
  // Create elements to add to the documewnt
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  
// Change the textContent property of the h2 element to contain name of company
h2.textContent = `${children.name}`;

// Change the textContent property of the additional element to contain the data
address.textContent= `${children.address}`;
phone.textContent= `${children.phone}`;

// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
card.setAttribute('class',"individual");


 // Add/append the section(card) with the h2 element
 card.appendChild(h2);
 card.appendChild(address);
 card.appendChild(phone);

 
  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('#directory_list').appendChild(card);
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory_list");

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

