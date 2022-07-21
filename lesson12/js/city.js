// Read the cities where we have Temples
const cityURL = 'https://pulidoesr.github.io/wdd230/lesson12/data/hotel_city.json';
var cities;

fetch(cityURL)
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

// Selected City ==> triggers localStorage and Map Update
function location_change() {
  var select = document.getElementById("city_select");
  var source = document.getElementById("googlemap");
  var city = document.getElementById("scity");
  var state = document.getElementById("sstate");
  var country = document.getElementById("scountry");
  var fromdate = document.getElementById("fromdate");
  var todate = document.getElementById("todate");
  var string = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAcdvUWlfP3YF1AfxIttw1XuveCT9UgNxE&q="

  // Store the hiden fields City, State, Country selected
  city = select.options[select.selectedIndex].value;
  state = cities[select.selectedIndex].State;
  country = cities[select.selectedIndex].Country;

  // change google map
  source.src = `${string}${city},${state},${country}`;

  // store the cit, state, country last selected
  localStorage.setItem("city",city);
  localStorage.setItem("state",state);
  localStorage.setItem("country",country); 
  localStorage.setItem("fromdate",fromdate.value);
  localStorage.setItem("todate",todate.value);
}
