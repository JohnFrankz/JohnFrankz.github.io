let myheading = document.querySelector('h1');
myheading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.jfif') {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.jfif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please input your name');
    if (!myName) {
        alert('Username can not be empty.');
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Cool!' + myName;
}

if (!localStorage.getItem('Name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('Name');
    myHeading.textContent = 'Cool! ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}