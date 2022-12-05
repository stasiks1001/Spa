# Fetching Data with React using AXIOS

![enter image description here](https://axios-http.com/assets/logo.svg)

[AXIOS](https://axios-http.com/docs/intro) is a  Promise based HTTP client for the browser and node.js


## why to use AXIOS

- It has good defaults to work with JSON data.
- Axios has function names that match any HTTP methods for example `.get` `.post`
- we write less code with axiosu unlike the Fetch API, we only need one `.then()` callback to access requested JSON data.
- Axios has better error handling.
- Axios can be used on the server as well as the client.

## how to start with axios
```js
 // in terminal 
npm install axios 
```
```js 
import axios from 'axios'
```
### to make a GET request with useEffect
```js
   useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      console.log(response.data);
    });
  }, []);
```
> `.get()` method to make a GET request to  endpoint, and using a `.then()` callback to get back all of the response data.
> we can always find the requested data from the `.data` property in the response.

### to make a POST request with useEffect

```js
function createPost() {
    axios
      .post(URL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        console.log(response.data);
      });
  }
```