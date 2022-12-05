## JSX in React 
![enter image description here](https://www.bram.us/wordpress/wp-content/uploads/2020/02/jsx-560x293.png)
- JSX stands for JavaScript XML.
- JSX makes it easier to write and add HTML in React.
- The HTML code must be wrapped in _ONE_ top level element, alternatively, you can use <></>
 ```js
const jsx = <h1>This is JSX</h1>
```
- Browsers does not understand JSX
- to to convert JSX to browser understandable JavaScript code, we use a tool like [Babel](https://babeljs.io/)
- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any  `createElement()` and/or  `appendChild()`  methods.

### How to Add Comments to JSX Code
by adding the JSX expresssion syntax inside the `/*` and `*/` comment symbols like this:
```js
{/* <p>This is some text</p> */}
```
### How to Add JavaScript Code in JSX
we need to write it in curly brackets like this:
```js
 
const number = 22;
const jsxContent = 
  <div>
   <p>Number: {number}</p>
  </div>
 
 
```
#### valid things you can have in a JSX Expression
-   A string like "hello"
-   A number like 10
-   An array like [1, 2, 4, 5]
- An object property
- A function call that returns some value
-   A map method that always returns a new array
#### invalid things and cannot be used in a JSX Expression
-   A for loop or while loop or any other loop
-  A variable declaration
-  A function declaration
-   An if condition ( ternary operator is the alternative)
- An object

> We can write arrays in JSX Expressions because `<p>{[1, 2, 3, 4]}</p>` is finally converted to `<p>{1}{2}{3}{4}</p>` when rendering (which can be rendered without any issue).
## conditional rendering in react 
![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--GIbvW-CM--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ww90ui11igvcmharnqw8.png)

>   `undefined`,  `null`, and  `boolean`  are not displayed on the UI when used inside JSX.
>   
we can write if conditions in JSX using two methods : 
1. `{ condition && jsx elements }`
2. `{ condition ? jsx element : other jsx element }`
example : 
```js
return(
<div>

{ data && <div> You have entries </div>}

</div> 
)
```
```js
<p>{a > b ? "Greater" : "Smaller"}</p>
```

 #### How to Nest JSX Expressions using conditional rendering : 
 ```js
const App = () => {
  const number = 10;
  return (
    <div>
      {number > 0 ? (
        <p>Number {number} is positive</p>
      ) : (
        <p>Number {number} is Negative</p>
      )}
    </div>
  );
};
```
 