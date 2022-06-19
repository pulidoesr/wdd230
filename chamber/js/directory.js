const requestURL = 'https://pulidoesr.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');
// Read the objects
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
  // Create elements to add to the documewnt
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let logo = document.createElement('img');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let webpage = document.createElement('p');
  

// Change the textContent property of the h2 element to contain the prophet's full name
h2.textContent = `${company.name}`;

// Change the textContent property of the additional element to contain the data
address.textContent= `${company.address}`
phone.textContent= `${company.phone}`
webpage.textContent= `https://${company.webpage}`

// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
logo.setAttribute('src', `images/${company.logo}`);
logo.setAttribute('style', `width:50px;height:55px`);

 // Add/append the section(card) with the h2 element
 card.appendChild(h2);
 card.appendChild(logo);
 card.appendChild(address);
 card.appendChild(phone);
 card.appendChild(webpage);
 
  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}

