 # Error handling, "try...catch"
 ![enter image description here](https://blog.alexdevero.com/wp-content/uploads/2020/05/18-05-20-error-handling-in-javascript-blog.jpg)

The **`try...catch`** statement marks a block of statements to try
```javascript
try {

  // code...

} catch (err) {

  // error handling

}
```
The `try` statement lets you test a block of code for errors.
The `catch` statement lets you handle the error.

First, the code in `try {...}` is executed.
If there were no errors, then `catch (err)` is ignored: the execution reaches the end of `try` and goes on, skipping `catch`.
If an error occurs, then the `try` execution is stopped, and control flows to the beginning of `catch (err)`. The `err` variable (we can use any name for it) will contain an error object with details about what happened.

> So, an error inside the `try {...}` block does not kill the script – we have a chance to handle it in `catch`.

in this example catch is ignored : 
```javascript
try {

  alert('Start of try runs');  // (1) <--

  // ...no errors here

  alert('End of try runs');   // (2) <--

} catch (err) {

  alert('Catch is ignored, because there are no errors'); // (3)

}
```

but in this example catch is working : 
```javascript
try {

  alert('Start of try runs');  // (1) <--

  getData(); // error, getData function is not defined!

  alert('End of try (never reached)');  // (2)

} catch (err) {

  alert(`Error has occurred!`); // (3) <--

}
```

> `try...catch` only works for runtime errors
## Error object
```javascript
try {
  // ...
} catch (err) { // <-- the "error object", could use another word instead of err
  // ...
}
```
For all built-in errors, the error object has two main properties: `name` `message`