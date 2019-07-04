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

        if (info[i].name == 'Preston')
        populateTownInfo(info[i]);
  }
  for (i = 0; i < info.length; i++){

        if (info[i].name == 'Soda Springs')
        populateTownInfo(info[i]);
}
  for (i = 0; i < info.length; i++){

        if (info[i].name == 'Fish Haven')
        populateTownInfo(info[i]);
}

function populateTownInfo(jsonObj){
    var town = jsonObj;
	
    var myArticle = document.createElement('div');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myImage = document.createElement('img');

    myH2.textContent = town.name;
    myPara1.textContent = town.motto;
    myPara2.textContent = "Year Founded: " + town.yearFounded;
    myPara3.textContent = "Population: " + town.currentPopulation;
    myPara4.textContent = "Annual Rainfall: " + town.averageRainfall;

    switch (myH2.textContent){
        case 'Preston':
            myImage.src = 'images/preston-water-park.jpg.bak';
            break;

        case 'Soda Springs':
			myImage.src = 'images/soda-springs.jpg.bak';
			break;

        case 'Fish Haven':
            myImage.src = 'images/fish-haven.jpg.bak';
             break;
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myImage);
    myArticle.className = 'contain';
    section.appendChild(myArticle); 
}
}