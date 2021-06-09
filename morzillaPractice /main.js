const myHeading = document.querySelector('h1');


const myButton = document.querySelector('button')

function setUserName(){
let myName = prompt('Please enter your name')
localStorage.setItem('name',myName)
myHeading.textContent = 'Helloo  world ' + myName
}

myButton.onclick = function() {
    setUserName();
    console.log('hello')
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }