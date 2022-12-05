# React Router
![enter image description here](https://miro.medium.com/max/880/1*kjZAT2HyYLv5gKT9SMBAHA.png)
- React Router is a lightweight, fully-featured routing library for the [React](https://reactjs.org/) JavaScript library
- React Router used to display multiple views in a single page application.
- Without React Router, it is not possible to display multiple views in React applications.
- Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views
> Twitter is a good example of this type of application. When we click on a tweet, only the tweet’s information is fetched from the server. The page does not fully reload

**React contains three different packages for routing** :
- ***react-router*** : the core library for the router
- **react-router-dom** : [react-router-dom](https://www.npmjs.com/package/react-router-dom)   used for web applications design.
- ***react-router-native*** : used for mobile applications [react-native](https://facebook.github.io/react-native/).
> 

### To use react routing, first, we need to install react-router-dom modules in our application
```js
npm install react-router-dom --save
```
in App.js
```js
import { BrowserRouter , Routes, Route } from 'react-router-dom'
```
```js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
 

```
`<BrowserRouter>` create URLs with the following format:
```js
 http://localhost:3000/route/subroute
  ```
> ```<BrowserRouter>``` should be the parent inside App.js or the parent inside index.js
-  `<BrowserRouter>` used to keep track of the location (URL). When the location changes because of a navigation action, the child component is re-rendered.
- we can change the url using  `<a>` the anchor tag or `<Link>` the component from `react-router-dom`  
- 
### `<Link>`
first we need to import Link 
```js
import { Link } from "react-router-dom";
```
then we can use Link in this way 
```html
<div className="menu"> 
 <ul>
   <li>  <Link to="/">Home</Link> </li>
   <li>  <Link to="/messages">Messages</Link> </li>
   <li>  <Link to="/about">About</Link> </li>
 </ul>
</div>
```
> when we click on Home or About the only thing that will change is the URL


now we need to add `<Routes>` component and inside `<Routes>` we will add `<Route>` component
`<Routes>` component will decide which component will be rendered when we have a change on the `URL`
```js
  <Route path="/" element={<Home />} />
  <Route path="/users" element={<Users />} />
  <Route path="*" element={<Error />} />
  ```
>  in this example `/` means : `http://localhost:3000/` then the `Home` component will be rendered.

>  `/users` means :  `http://localhost:3000/users` then `Users` component will be rendered.

> `*` means any url other than `/` and `/users` in this case the Error component will be rendered.


another example about route :
```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
```
> `<Users>` element is only
     ever rendered when the URL matches /users/*

we can add routing in `<Users />` component
```js
import {BrowserRouter, Routes, Route , Link } from 'react-router-dom'; 
function Users() {

  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UsersIndex />} />
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}
```
> `<Link to="me">` will work like `/users/me`

> `<Route path=":id" >` will work like `/users/22` or `/users/100`

### Nested Routes in one place :
we can add nested Routes in this way 
```js
import {BrowserRouter, Routes, Route } from 'react-router-dom'; 
function App() {
  return (
		<BrowserRouter >
			<Route path="users" element={<Users />}>
			          <Route path="max" element={<UsersIndex />} />
			          <Route path=":id" element={<UserProfile />} />
			          <Route path="me" element={<OwnUserProfile />} />
			</Route>
			<Route path="/" element={<Home />} />
		</BrowserRouter >
)
```
> in the above example we have two Route : `users` and `/`
> in the `users` Route we have three sub Route : `max` means `users/max` will render `<UsersIndex />`
> we have `:id` which means `users/*`  the `*` can be anything will render `<UserProfile />`
> we have `me` which means `users/me`  will render `<OwnUserProfile />`


### useParams Hook
`useParams` is one of the [Hooks](https://reactjs.org/docs/hooks-intro.html) methods that [React Router](https://reactrouter.com/) ships with
```js
import { Routes, Route } from 'react-router-dom';

function App() {   

  
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:name" element={<Products />} />
    </Routes>
  );
}
```
> the Route `products/:name` means in browser : `http://localhost:3000/products/coffee`
> we use useParams Hook to get the value off name params

in `<Product />` Component : 
```js
import { useParams } from 'react-router-dom';

function Products() {   
const params = useParams()
  
  return (
    <div>
        {params.name}
    </div>
  );
}
```

### useNavigate Hook
useNavigate hook is useful any time you need to navigate after the user submits a form or clicks on a button.
```js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
   

  
  return (
    <button onClick={()=>navigate("/about")}>
      go to about page
    </button>
  );
}
```



