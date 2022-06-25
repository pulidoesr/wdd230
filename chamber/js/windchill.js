const parent = document.getElementById("wind_chill"); // selecting parent
const temperature = document.getElementById("current_temp"); // temperature
const speed = document.getElementById("wind_speed"); // wind speed
/* const oldElement = document.getElementById("wc"); // windchill old
const newElement = document.createElement("wc"); // windchill new */

if (temperature != null) {
    
    let t = parseFloat(temperature.innerText)
    let s = parseFloat(speed.innerText)
    let string = ""
// speed from km. to miles
    s = s * 0.621371; 
// calculation of wind chill
    if (t <= 50 && s > 3) {
          f = 35.74 + 0.6215*t  -35.75*s**0.16  + 0.4275*t*s**0.16;
        f = f.toFixed(2);
        string = f.toString();
        parent.innerHTML = string;
    } else {
          parent.innerHTML = "N/A";
            }
    } else {
        parent.innerHTML = "N/A";
    };

// create or replace the wind chill value
/* if (oldElement.hasChildNodes()) {
    parent.replaceChild(newElement, oldElement);
} else {
    parent.append(newElement);
} */
