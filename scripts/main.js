
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');


function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}



if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/halo-icon.png'){
		myImage.setAttribute ('src', 'images/halo.jpg');
	}
	else {
		myImage.setAttribute ('src', 'images/halo-icon.png')
	}
}