// Read the cities where we have Temples
// JSON Temple 
// "Temple":"Aba Nigeria Temple",0
// "Latitude":"5.147644",1
// "Longitude":"7.356719",2
// "Address":"Okpu-Umuoba Road Off Aba-Owerri Road at Union Bank",3
// "City":"Aba",4
// "State":"Abia State",5
// "Postal Code":"",6
// "Country":"Nigeria",7
// "Phone":"(+234) 80-3903-4804",8
// "Link": "https://www.churchofjesuschrist.org/temples/details/aba-nigeria-temple?lang=eng"},9
const templeURL = 'https://pulidoesr.github.io/wdd230/lesson12/data/ldstemples.json';

var temples;
var lat;
var lon;

fetch(templeURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    temples = jsonObject['temples'];
    let menu = document.getElementById('temple_select');
//    let option = document.createElement('option');
    for (var field in temples) {
        let option = document.createElement('option');
        option.textContent= `${temples[field].Temple} `;
        option.setAttribute('value', `${temples[field].Temple}`);
        menu.add(option);
      }
  });

  function temple_selected () {
    var select = document.getElementById("temple_select");
    var temple_name = document.getElementById("temple_selected");
    const address = document.querySelector("#temple_address");
    const temple_link = document.querySelector("#temple_link");
    
    
    // Obtain Temple, Latitude and Longitude of the temple selected
    temple_name.textContent = temples[select.selectedIndex].Temple;
    lat = temples[select.selectedIndex].Latitude;
    lon = temples[select.selectedIndex].Longitude;  
    address.textContent = temples[select.selectedIndex].Address;
    temple_link.textContent = temples[select.selectedIndex].Link;
    temple_link.setAttribute('href', `${temples[select.selectedIndex].Link}`);
    temple_link.setAttribute('target',"_blank");
    var container = document.querySelector('#wforecast');
    if (container.hasChildNodes()) {
      removeAllChildNodes(container);
    }

    apiFetch2()
  }  

//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// The current temperature, current condition description, and humidity.
// Weather alerts if available/applicable from the government and display it as a closeable message at the top of the page.
// Display and label a three day forecast of the "day" temperature using the current date. This can be designed in another card or area.

let url2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
let appid2 = '&exclude=minutely,hourly&appid=cb4343a1424216be70f9ceed6101df98';

async function apiFetch2() {
  try {
    url3 = url2 + lat + '&lon=' + lon + '&units=imperial' + appid2;
    console.log(url3);
    const response = await fetch(url3);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayForecast(data) // displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
    }
}

function  displayForecast(forecastData) {

  // const currentDayName = currentDate.getDay();
  const week =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  
  count = 1;
  for (let field in forecastData.daily) {    
    if (count < 4) {
      let card = document.createElement('div');
      let temp_day_name = document.createElement('p');
      let temp_day_number = document.createElement('p');
      let temp_day_day = document.createElement('p');
      let temp_day_eve = document.createElement('p');
      let temp_icon    = document.createElement('img')
      var iconsrc = 'https://openweathermap.org/img/w/'
      var iconcode = '';
      const wcurrentDate = Date(forecastData.daily[field].dt); // Convert number to date
      const currentDate =  new Date(wcurrentDate);            // date field to use with func 
      var currentDayOfMonth;       // Day of the Month
      var currentDayOfWeek;       // Day of the week
      
      currentDate.setDate(currentDate.getDate() + count); 
      currentDayOfMonth = currentDate.getDate(); 
      currentDayOfWeek = currentDate.getDay();
      iconcode = forecastData.daily[field].weather[0].icon + '.png'
      iconsrc = iconsrc + iconcode;
      console.log(iconcode);
      console.log(iconsrc);
      temp_day_name.textContent = week[currentDayOfWeek];
      temp_day_number.textContent = currentDayOfMonth;
      temp_day_day.textContent = forecastData.daily[field].feels_like.day;
      temp_day_eve.textContent = forecastData.daily[field].feels_like.eve;
      
      temp_icon.setAttribute('src', iconsrc);
      card.appendChild(temp_day_name);
      card.appendChild(temp_day_number);
      card.appendChild(temp_icon);
      card.appendChild(temp_day_day);
      card.appendChild(temp_day_eve);
      document.querySelector('#wforecast').appendChild(card);
      count++;
  }
}}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
