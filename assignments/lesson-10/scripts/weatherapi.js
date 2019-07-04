let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b47f2cab33c690b0345b5ace29342cc2';

weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);
  let icon = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
  let desc = weatherData.weather[0].description;
  
  document.getElementById('cc-img').setAttribute('src',icon)
  document.getElementById('cc-img').setAttribute('alt',desc)

  document.getElementById('description').innerHTML = weatherData.weather[0].description;
  document.getElementById('curTemp').innerHTML = Math.round(weatherData.main.temp);
  document.getElementById('humidity').innerHTML = weatherData.main.humidity;
  document.getElementById('windspeed').innerHTML = weatherData.wind.speed;

  //Wind Chill//
  var currTemp = weatherData.main.temp;
  var windSpeed = weatherData.wind.speed;
  var chill = 35.74 + 0.6215 * currTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currTemp * Math.pow(windSpeed, 0.16);
  var f = Math.round(chill);

  document.getElementById('windchill').innerHTML = f;
}
  // Forecast //
  let forRequest = new XMLHttpRequest();

  forRequest.open('Get', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b47f2cab33c690b0345b5ace29342cc2', true);
  forRequest.send();
  
 forRequest.onload = function() {
    let forData = JSON.parse(forRequest.responseText);
    console.log(forData);

    var d = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    document.getElementById('fortemp').innerHTML = forData.list[0].main.temp;
  }