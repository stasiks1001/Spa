
# ES6 Modules in javascript

![ES6 Modules in javascript](./es6.jpg)

we need ES6 modules in order to effectively reuse, maintain, separate and encapsulate internal behaviour from external behaviour. It’s not about making the system complex, but having the ability to easily scale and delete stuff without breaking the system.


As our application grows bigger, we want to split it into multiple files, so called “modules”. A module may contain a class or a library of functions for a specific purpose.
**A module is just a file. One script is one module. As simple as that.**
- Each module is a piece of code that is executed once a JavaScript file is loaded.
- In that code, there may be declarations (variables, functions, classes e.t.c).
> Before ES6 Modules, it was impossible to directly reference or include one JavaScript file in another.
so the solution was to use multiple script tags
```html
<script src="app.js"></script>  
<script src="search.js"></script>  
<script src="user.js"></script>
```
This is a bad practice as each script initiates a new HTTP request, which affects page performance.
>With ES6 modules, you can concatenate all scripts in one main script by marking some of them as exports, then other modules can import them.
![enter image description here](https://miro.medium.com/proxy/1*rJdvreyM4VKoMpMOjn4gLA.png)

-   `export`  keyword labels variables and functions that should be accessible from outside the current module.
-   `import`  allows the import of functionality from other modules.

we must tell the browser that a script should be treated as a module, by using the attribute `<script type="module">`.
we need just  to write in our index.html script : `type = "module"` like this

```javascript 
<script type="module" src="app.js"> </script>
```
and we can use some functions and variables from `main.js` in `app.js`

so we export in main.js and import in app.js
for example we have a function in main.js and we want to use it in app.js 
we add `export` before `function` like that 
```javascript
// 📁 main.js
export function greetUser(user) {
  console.log(`Hello, ${user}!`);
}
```
…Then another file `app.js` for example may import and use it:
```javascript
// 📁 app.js 
import {greetUser} from './main.js';
greetUser('Mansour') // Hello Mansour!

```
we imported the function `greetUser` from `main.js` and no need to write 
```javascript 
<script  src="main.js"> </script>
```


# Named Export vs Default Export in ES6
**Named Export: (export)**
With named exports, one can have multiple named exports per file. Then import the specific exports they want surrounded in braces. The name of imported module has to be the same as the name of the exported module.
```javascript
// 📁 main.js
export function greetUser(user) {
  console.log(`Hello, ${user}!`);
}
export function getData(){
}
```
```javascript
// 📁 app.js 
// ex. importing single named export
import {greetUser} from './main.js';

// ex. importing multiple named export
import {greetUser, getData} from './main.js';

//Import all the named exports onto an object:
import * as MainFunctions from "./main.js";  
// use MainFunctions.greetUser('Max') and MainFunctions.getData()  
```
**Default Export: (export default)**
we can have only one default export per file
```javascript
// 📁 main.js
export default function greetUser(user) {
  console.log(`Hello, ${user}!`);
}
export function getData(){
}
```
or 
```javascript
// 📁 main.js
function greetUser(user) {
  console.log(`Hello, ${user}!`);
}
export function getData(){
}
export default greetUser
```


```javascript
// 📁 app.js 
// ex. importing default export
import greetUser from './main.js';

// ex. importing  named export
import { getData} from './main.js';
```
