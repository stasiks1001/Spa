const ul = document.querySelector('ul')
console.log(ul);

// accessing child nodes 
console.log(ul.childNodes[0]);
ul.childNodes[1].style.border = "2px solid lightgreen";
//ul.childNodes[0].textContent ='123';

// children 
//console.log(ul.children[1]);
ul.children[2].style.color ='blue';

// change the color to red for all li elements
// Array.from(ul.children).forEach(element=>{
//     element.style.color ='red'
// });
    
 // add border too all elements
   const children =ul.children; 
 [...children].forEach(element => {
     element.style.border = " 2px solid lightgreen";
     element.style.marginBottom ="5px";
 });

 // destructuring with children 
 const [first , second , third ] = ul.children;
 third.style.background = "lightblue";

 // first child => text node 
 console.log(ul.firstChild);

 // first Element child
 console.log(ul.firstElementChild);
 ul.firstElementChild.style.background = "lightgreen";

 // Last Element child;
 ul.lastElementChild.style.background ="skyblue";

 // parentNode parentElement
 console.log(ul.parentElement);  // body
 console.log(ul.parentElement.parentElement) // html

 // nextSibling previousSibling
 console.log(ul.children[0].nextSibling); // text node 
//  ul.firstElementChild.nextSibling.textContent ="123"
//  ul.firstElementChild.previousSibling.textContent ="123"

// nextElementSibling previousElementSibling
ul.children[0].nextElementSibling.style.background ="magenta"
ul.lastElementChild.previousElementSibling.style.color ="red";

// console.log(ul.children[0]);
// const text =  " new child node"; // new text node
// ul.children[0].append(text)  // added another node 
// console.log(ul.children[0].childNodes[1]);

// add a buton to the last li 
const btn = document.createElement('button');
// add label to the button : x
btn.textContent ="x"
//console.log(btn);
ul.lastElementChild.append( btn ); 
console.log(ul.lastElementChild.children);

//btn.parentElement.remove();
// btn.addEventListener('click' , ()=>{
//     btn.parentElement.remove();
// })

btn.onclick = ()=>{
    if(confirm(' are you sure ?')){
        btn.parentElement.remove();
    }
    
}

// closest 
const secondDiv = document.querySelector('#second');
const closest = secondDiv.closest('header')
console.log(closest);



 

