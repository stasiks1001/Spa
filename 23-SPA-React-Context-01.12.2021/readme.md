# State Management in SPAs
Is the approach of having one single source of state for the entire app to which all the components can have direct access.
This approach is meant to reduce the amount of code and confusion that is a part of passing props down to children components and grandchildren components.  

## Context API
The React Context API is a **state management tool** that allows us to effectively produce global state variables that can be passed around. This is the alternative to *"prop drilling"* or moving props from grandparent to child to parent, and so on. Context is also regarded as an easier, lighter approach to state management than other tools such as **Redux**.

Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.

## How Context works

React.createContext() is all you need. It returns a provider . **Provider** is a component that as it's names suggests provides the *global state* to its children. It will hold the "store" and be the parent of all the components that might need that store.
We can then access the provided Store from any child component using a hook called **useContext( )**


## Creating and using  Context & Provider 
```js
import React, { createContext, useState} from "react";

	export const themeContext = createContext();

	export default function App() {
	const [darkTheme, setDarkTheme] = useState(true);

	return (
		<>
			<themeContext.Provider value={darkTheme}>
				<ChildComponentExample />  // this child can access the context value
			</themeContext.Provider>
		</>
	);
}
```

## useContext to access Store
```js
imoprt React, {useContext} from 'react';
import {themeContext} from './App';

export default function ChildeComponentExample() {
	const darkTheme = useContext(themeContext);
	
	return (
		<div className={'dark' && darkTheme}>
			// your component body
		</div>
}
```