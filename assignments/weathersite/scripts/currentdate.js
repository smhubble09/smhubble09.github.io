var today = new Date();
var day = new Array(7);
day[0] = 'Sunday';
day[1] = 'Monday';
day[2] = 'Tuesday';
day[3] = 'Wednesday';
day[4] = 'Thursday';
day[5] = 'Friday';
day[6] = 'Saturday';

var dd = day[today.getDay()];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var mm = months[today.getMonth()]; 
var yyyy = today.getFullYear();

document.getElementById('currentDate').innerHTML = dd + ', ' + mm + ' ' + today.getDate() + ' ' + yyyy;