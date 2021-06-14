const container = document.querySelector('#container')
const red = document.createElement('p')
red.textContent = 'Hey I\'m red!!'
red.style.color = "red"
container.appendChild(red)
const div = document.createElement('div')
const h1 = document.createElement('h1')
const p2 = document.createElement('p')
div.style.cssText = "background-color:pink; border : black 2px solid; "
h1.textContent = "I am inside div"
p2.textContent="me too!"
div.appendChild(h1)
div.appendChild(p2)
container.appendChild(div)