const black = document.querySelector('.black');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const myForm = document.getElementById('myForm');

// addEventListener takes 2 mandatory and 1 optional param

black.addEventListener('click', () => {
    console.log('black');
});

red.addEventListener('click', () => {
    console.log('red');
}, { once: true });             // adding an options object

yellow.addEventListener('click', (e) => {       // when using the event object dont forget to pass it as a param
    e.stopPropagation();        // stoping the bubbling of the event
    console.log('yellow');
});

window.addEventListener('keydown', e => {
    if (e.keyCode === 13) console.log(input);
})


function greet() {
    console.log('hi');
}

black.addEventListener('dblclick', greet);          
black.removeEventListener('dblclick', greet);       // when adding a specific fn we can also remove the event listener



const subFn = (event) => {
    event.preventDefault();                         // to prevent the default behaviour of the submit event (refresh)
    h1.innerText = 'thanks for subscription!'
}

myForm.addEventListener('submit', subFn, { once: true })