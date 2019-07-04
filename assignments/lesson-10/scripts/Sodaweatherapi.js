//Current Weather
var weatherCurrent = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b47f2cab33c690b0345b5ace29342cc2';

weatherCurrent.open('Get', apiURLstring, true);
weatherCurrent.send();

weatherCurrent.onload = function () {
	var weatherData = JSON.parse(weatherCurrent.responseText);
	console.log(weatherData);
	
	document.getElementById('description').innerHTML = weatherData.weather[0].description;
	document.getElementById('curTemp').innerHTML = Math.round(weatherData.main.temp);
	document.getElementById('humidity').innerHTML = weatherData.main.humidity;
	document.getElementById('windspeed').innerHTML = weatherData.wind.speed;
}
//Forecast
	var weatherForecast = new XMLHttpRequest();
	weatherForecast.open('Get', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b47f2cab33c690b0345b5ace29342cc2', true);
	weatherForecast.send();
  
	weatherForecast.onload = function() {
    var foreData = JSON.parse(weatherForecast.responseText);
    console.log(foreData);
	
    var listDate = [];
    var listIcon = [];
    var listTemp = [];

    for (i = 0; i < foreData.list.length; ++i) {
        var time = foreData.list[i].dt_txt;
        if (time.includes('18:00:00')) {
			var today = new Date(foreData.list[i].dt * 1000);
			var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
			var currDate = days[today.getDay()] + ',' + '<br>' + months[today.getMonth()] + ' ' + today.getDate();
			listDate.push(currDate);
			
            var icon = foreData.list[i].weather[0].icon;
            var iconDest = "https://openweathermap.org/img/w/" + icon + ".png";
            listIcon.push(iconDest);

			var temp = foreData.list[i].main.temp;
			temp = Math.round(temp);
			listTemp.push(temp);
    }
    //Forcast Date
    document.getElementById('day1').innerHTML = listDate[0];
    document.getElementById('day2').innerHTML = listDate[1];
    document.getElementById('day3').innerHTML = listDate[2];
    document.getElementById('day4').innerHTML = listDate[3];
    document.getElementById('day5').innerHTML = listDate[4];
    //Icon
    document.getElementById('icon1').src = listIcon[0];
    document.getElementById('icon2').src = listIcon[1];
    document.getElementById('icon3').src = listIcon[2];
    document.getElementById('icon4').src = listIcon[3];
    document.getElementById('icon5').src = listIcon[4];
    //Temp
    document.getElementById('day1Temp').innerHTML = listTemp[0];
    document.getElementById('day2Temp').innerHTML = listTemp[1];
    document.getElementById('day3Temp').innerHTML = listTemp[2];
    document.getElementById('day4Temp').innerHTML = listTemp[3];
    document.getElementById('day5Temp').innerHTML = listTemp[4];
}
//Upcoming Events
var section = document.querySelector('section.contain');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var townData = request.response;
  showTown(townData);
}
function showTown(jsonObj) {
  var info = jsonObj['towns'];

  for (var i = 0; i < info.length; i++){
	  if ((info[i].name == 'Soda Springs') == false){
	  continue;	
  }
	var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara = document.createElement('p');
	var myImage = document.createElement('img');
	
	myH2.textContent = 'Upcoming events in Soda Springs:';
	
    var allEvents = info[i].events;
    for (var l = 0; l < allEvents.length; l++) {
		var listItem = document.createElement('list');
		listItem.textContent = allEvents[l];
		myPara.appendChild(listItem);
	}
	
	myArticle.appendChild(myH2);
	myArticle.appendChild(myPara);
	myArticle.appendChild(myImage);
	
	myImage.src = 'images/soda-springs.jpg.bak';
	section.appendChild(myArticle);
  }
 }
}
	