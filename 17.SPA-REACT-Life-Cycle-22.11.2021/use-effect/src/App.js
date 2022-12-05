import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Posts } from './components/Posts';

function App() {

  const [counter, setCounter] = useState(0);

  // runs after any change of any state variable  
  useEffect(() => { console.log("re-rendered"); });

  // runs after any change of a specific state variable (counter)
  useEffect(() => {
    console.log("counter raised");
  }, [counter]);

  // this one runs once after the initial first render
  useEffect(() => { console.log("component did mount"); }, []);

  return (
    <div className="App">
      <Counter counter={counter} setCounter={setCounter} />
      <Posts />
    </div>
  );
}

export default App;
