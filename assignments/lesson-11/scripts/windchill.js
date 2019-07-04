var t = parseInt(document.getElementById('airTemp').innerHTML);

var s = parseInt(document.getElementById('windSpeed').innerHTML);

var f = (35.74 + (.6215*t)) - (35.75*Math.pow(s, .16)) + (.4275*t*Math.pow(s, .16));

chill = Math.round(f);

document.getElementById('windChill').innerHTML = chill;