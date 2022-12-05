import './App.css';
import Game from './components/Game';
import { useState } from 'react';

function App() {
  const [ random , setRandom ] = useState(Math.random());
  const reRender = ()=>{     setRandom(Math.random())       }

  const [ mounted , setMounted] = useState(true);
  const toggle = ()=>{ setMounted(!mounted) }
  return (
    <div className="App">
     <h1> React Life Cycle (useEffect)</h1> 
     <button onClick={reRender} > re-Render</button>    
     <button onClick={toggle} > Show/Hide</button>    
     { mounted  &&  <Game random={random} /> }  
     <p>{random}</p>
    </div>
  );
}

export default App;
