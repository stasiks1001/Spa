const main = document.getElementById('main');
// classList

//main.classList.add('green-text');

// add center to main :

//main.classList.add('center');

main.classList.add('green-text','center');
console.log(main.classList.length);
//main.classList += ' big-text'
main.classList.remove('green-text','center');
main.innerText += " Hello World";

// how to add link at the end of main
main.innerHTML += '<a href="https://wwww.google.com" > google link </a>';

const div = document.querySelector('#content');
// add a border 
div.style.border ="1px solid blue";
// add padding for content div 
div.style.padding = "15px";
// font bold
div.style.fontWeight = "bold";

// add child to content div
// 1- create element using createElelment 2-we add the element to appendChild
const h3 = document.createElement('h3');
h3.innerText = ' Hello world!'
div.appendChild(h3);

//div.appendChild(main);
const section = document.querySelector('section');
console.log(section);
div.appendChild(section);

// create an image and add it to content div 

const img = document.createElement('img');
img.src = 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80'
//img.setAttribute('src' , 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')
div.appendChild(img)





