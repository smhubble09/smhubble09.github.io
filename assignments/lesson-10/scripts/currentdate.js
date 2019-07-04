var today = new Date();
var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var dd = day[today.getDay()];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var mm = months[today.getMonth()]; 
var yyyy = today.getFullYear();

document.getElementById('currentDate').innerHTML = dd + ', ' + mm + ' ' + today.getDate() + ' ' + yyyy;