function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
  
}
const x = document.getElementById('hamburgerBtn');
  x.onclick = toggleMenu;

  // Last date modified
let oLastModif = new Date(document.lastModified);
document.getElementById('lastmodified').textContent = oLastModif;

// Read the cities where we have Temples
const requestURL = 'https://pulidoesr.github.io/wdd230/lesson12/data/hotel_city.json';
const container = document.getElementById("#temple_city_select");
var cities;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    cities = jsonObject['cities'];
    let menu = document.getElementById('city_select');
//    let option = document.createElement('option');
    for (var field in cities) {
        let option = document.createElement('option');
        option.textContent=`${cities[field].City}`;
        option.setAttribute('value', `${cities[field].City}`);
        menu.add(option);
      }
  });


// Selected City triggers localStorage and Map Update
function location_change() {
  var select = document.getElementById("city_select");
  var source = document.getElementById("googlemap");
  var city = document.getElementById("scity");
  var state = document.getElementById("sstate");
  var country = document.getElementById("scountry");
  var string = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAcdvUWlfP3YF1AfxIttw1XuveCT9UgNxE&q="
  city = select.options[select.selectedIndex].value;
  state = cities[select.selectedIndex].State;
  country = cities[select.selectedIndex].Country;
  // change the google map
  source.src = `${string}${city},${state},${country}`;

  // store the new number of visits value
  localStorage.setItem("city",city);
  localStorage.setItem("state",state);
  localStorage.setItem("country",country); 
}
