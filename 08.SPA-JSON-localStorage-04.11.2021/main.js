import data from './data.json';     // importing all information inside the json file
// -----------------------------------------------------------------------------------

const todos = [
    { text: 'clean kitchen', done: false },
    { text: 'do sport', done: false },
    { text: 'go shopping', done: false },
    { text: 'cook dinner', done: false },
]

// in order to store the todos array in localStorage we need first to convert it into json string
const todosJson = JSON.stringify(todos);

// now we can store the strigified data in localStorage under the key 'myTodos'
localStorage.setItem('myTodos', todosJson);

// we can get the stringified array from localStorage using the key 'myTodos'
const jsonData = localStorage.getItem('myTodos');

// we can now parse the strigified array into javascript array 
const todosArray = JSON.parse(jsonData);

// we can remove any item from localStorage using the key
localStorage.removeItem('myTodos');

// we can also clear all the localStorage
localStorage.clear();