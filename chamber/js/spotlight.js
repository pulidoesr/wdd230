const requestURL = 'https://pulidoesr.github.io/wdd230/chamber/data/data.json';
const container = document.getElementById("member_list");
let count = 0;
// Read the objects
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies, count);
  });

function displayCompanies(company, count) {
  // Create elements to add to the documewnt
  let card = document.createElement('section');
  let h4 = document.createElement('h4');
  let logo = document.createElement('img');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let webpage = document.createElement('a');
  let member = document.createElement('p')

count = count + 1
  
// Change the textContent property of the h2 element to contain name of company
h4.textContent = `${company.name}`;

// Change the textContent property of the additional element to contain the data
address.textContent= `${company.address}`;
phone.textContent= `${company.phone}`;
webpage.textContent= `https://${company.webpage}`;
member.textContent = `${company.member_level}`

// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
logo.setAttribute('src', `images/${company.logo}`);
logo.setAttribute('style', `width:50px;height:55px`);
webpage.setAttribute('href', `https://${company.webpage}`);
card.setAttribute('class','member_item');

 // Add/append the section(card) with the h2 element
 card.appendChild(h4);
 card.appendChild(logo);
 card.appendChild(address);
 card.appendChild(phone);
 card.appendChild(webpage);
 card.appendChild(member);
 
  // Add/append the existing HTML div with the cards class with the section(card)
  if (count <= 3) {
     document.querySelector('#member_list').appendChild(card);
  }
}
