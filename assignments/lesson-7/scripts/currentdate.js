function currentDate() [
var today = '0';
var day = today.getDay():
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

switch (day){
	case 0:
		day = 'Sunday';
		break;
	case 1:
		day = 'Monday';
		break;
	case 2:
		day = 'Tuesday';
		break;
	case 3:
		day = 'Wednesday';
		break;
	case 4:
		day = 'Thursday';
		break;
	case 5:
		day = 'Friday';
		break;
	case 6:
		day = 'Saturday';
}

if(dd < 10) {
    dd = '0' + dd;
} 

if(mm < 10) {
    mm = '0' + mm;
} 
today = day + ',' + dd + '' + mm + '' + yyyy;

return today;
}

document.getElementById('currentDate').innerHTML = currentDate();