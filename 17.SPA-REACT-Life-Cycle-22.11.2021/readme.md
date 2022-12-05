

#  React  Component Lifecycle
![enter image description here](https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png)
- Every component has a lifecycle
 
- Lifecycle essentially refers to the birth, life and death
of the component
- Lifecycle methods are functions which are called when
certain time
## Why are lifecycles important to us?

- It helps us understand what the component is
doing
- It gives us control over the component at different
stages in its life

- By understanding lifecycles, we can understand
React Hooks better
- Only with class components can we use lifecycle
methods directly

- For functional components, we can not use lifecycle
methods, but instead (since 2018/19) we use React
Hooks

 - [ ]    **Mounting** –  Birth of your component
-  [ ]     **Update** – Growth of your component
-  [ ]  **Unmount** – Death of your component


 
## Lifecycles related to mounting
> birth of your component

1. componentWillMount()
2. render()
3. componentDidMount()


## Lifecycles related to component updates
> Growth of your component

1. componentWillUpdate()
2. render()
3. componentDidUpdate()


## Lifecycles related to unmounting
> Death of your component
1. componentWillUnmount()


## Lifecycles and state / props
- When the data for a component changes, that
component must be re-rendered
- When you update state, you are also re-rendering
the component
-  When the props change, you are also re-rendering
the component
### Use Cases
- starting or stopping animations
- setting or cancelling timers
- performing or cancelling network requests
- updating 3rd party UI libraries


## using react lifecycle with functional component
![enter image description here](https://www.bacancytechnology.com/blog/wp-content/uploads/2020/08/React-Natvie-Table.png)
#### Effect Hook:  `useEffect()`
-  Operations like data fetching, subscriptions, or manually changing the DOM from React components are called “side effects” or "effects", because they can affect other components and can’t be done during rendering.
 -   `useEffect`, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.
 -   By default, React runs the effects after every render — including the first render. So  `useEffect()`  is called on initial render, when state changes ( component updates ) and when component unmounts.
 -  Just like with useState, you can use more than a single effect in a component.
 - The way to use the `useEffect` hook is by passing a single function to `useEffect`. This function would be the side effect you want to run.
 ```js
useEffect(() => {
  console.log('This is a side effect')
})
```
-  to run a side effect on mount then you can pass an empty array as the second parameter
 ```js
useEffect(() => {
  console.log('run on mount')
}, [])
```
this second array parameter is really useful since it allows side effects to be run whenever any value changes. For example if the state from our component changes we can run a side effect
```js
useEffect(() => {
  console.log('Only run on list change')
}, [list])
```
-   ##### `Effects that do require cleanup`:
- are the operations where we may want to set up a subscription to some external data source. So its important to cleanup to avoid memory leak. If your effect returns a function, React will run it when it is time to clean up on unmounts and re-render. Function return is optional and is required only if we require cleaning. Please note the this return function is called when the component unmounts and on every re-render.
```js

    useEffect( () => {
    
    	console.warn( 'mounted/updated: Do Something( Fetch API, Add Event )' );
    
    	return () => console.warn( 'unmounted: Do Something( Unsuscribe, Remove Event )' );
    } );
```


 

