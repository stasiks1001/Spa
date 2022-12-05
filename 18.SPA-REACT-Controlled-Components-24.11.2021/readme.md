
# useRef( ) hook
This hook provides a way to access DOM nodes or React elements created in the render method.
When we initialize useRef() like so:
`` const numberInput = useRef(1);`` 
that returns an object with the key 'current' and the value of 1

If you pass a ref object to React with `<input type="number" ref={numberInput } />`, React will set its `.current` property to the corresponding DOM node.
In other words, to access the HTML element value we use: 
`numberInput.current.value`

Keep in mind that `useRef`  _doesn’t_ notify you when its content *(HTML ELEMENT)* changes. Mutating the `.current` property doesn’t cause a re-render.


```js
import React, { useRef } from "react";

const CustomTextInput = () => {
const textInput = useRef();
focusTextInput = () => textInput.current.focus();

return (
	<>
		<input type="text" ref={textInput} />
		<button onClick={focusTextInput}>Focus the text input</button>
	</>
);
}
```

# Controlled vs Uncontrolled Components

## Controlled Components

### In a controlled component, the form data is handled by the state within the component. The state within the component serves as “the single source of truth” for the input elements that are rendered by the component. e.g.
```js
import React, {useState} from 'react';
export default function App() {
const [text, setText] = useState('');
	
return (
	<div>
		<h1>{text}</h1>
		<input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
	</div>
	)
}
```


1.  The textbox has a value attribute bound to the text property in the state.
2.  We have an onChange event handler declared.

**_These 2 points tell you that this is a controlled component._**

## Uncontrolled Components
Uncontrolled components act more like traditional HTML form elements. The data for each input element is stored in the DOM, not in the component. Instead of writing an event handler for all of your state updates, you use a **_ref_** to retrieve values from the DOM bye accessing the current property on the *ref*
and in case Uncontrolled Components have access to state variables those would be passed down as props from the parent component where that state was declared.
