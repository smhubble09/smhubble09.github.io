
var airTemp = 45;

var windSpeed = 10;

var t = parseInt(document.getElementById('airTemp').innerHTML);

var s = parseInt(document.getElementById('windSpeed').innerHTML);

var f = 35.74 + (.6215*t) - (35.75*Math.pow(s, .16)) + (.4275*t*pow(s, .16));

document.getElementById('output').innerHTML = f;