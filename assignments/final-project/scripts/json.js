var section = document.querySelector('section.templeinfo');
var requestURL = 'https://smhubble09.github.io/assignments/final-project/scripts/temple.list.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var templeData = request.response;
  showTemple(templeData);
}

function showTemple(jsonObj) {
  var info = jsonObj['temples'];

  for (var i = 0; i < info.length; i++){

        if (info[i].name == 'Salt Lake City')
        populateTempleInfo(info[i]);
	}
  for (i = 0; i < info.length; i++){

        if (info[i].name == 'Oklahoma City')
        populateTempleInfo(info[i]);
	}
  for (i = 0; i < info.length; i++){

        if (info[i].name == 'Los Angeles')
        populateTempleInfo(info[i]);
	}
  for (i = 0; i < info.length; i++){

        if (info[i].name == 'Payson')
        populateTempleInfo(info[i]);
	}

function populateTempleInfo(jsonObj){
    var temple = jsonObj;
	
    var myArticle = document.createElement('div');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
	var myPara5 = document.createElement('p');
	var myPara6 = document.createElement('p');
	var myPara7 = document.createElement('p');
    var myImage = document.createElement('img');

    myH2.textContent = temple.name + ' Temple';
    myPara1.textContent = temple.address;
    myPara2.textContent = 'Telephone: ' + temple.telephone;
    myPara3.textContent = 'Email: ' + temple.email;
    myPara4.textContent = 'Services: ' + temple.services;
	myPara5.textContent = 'History: ' + temple.history;
	myPara6.textContent = 'Endowment Schedule: ' + temple.sschedule;
	myPara7.textContent = 'Temple Closures: ' + temple.tcschedule;

    switch (myH2.textContent){
        case 'Salt Lake City':
            myImage.src = "images/slctemple.jpeg.bak";
            break;

        case 'Oklahoma City':
			myImage.src = "images/okctemple.jpeg.bak";
			break;

        case 'Los Angeles':
            myImage.src = "images/latemple.jpg.bak";
             break;
		
		case 'Payson':
            myImage.src = "images/paysontemple.jpg.bak";
             break;
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
	myArticle.appendChild(myPara5);
	myArticle.appendChild(myPara6);
	myArticle.appendChild(myPara7);
    myArticle.appendChild(myImage);
    myArticle.className = 'templeinfo';
    section.appendChild(myArticle); 
}
}