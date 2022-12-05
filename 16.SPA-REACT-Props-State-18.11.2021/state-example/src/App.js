import './App.css';
import { useState } from 'react'

function App() {
  
  const [mesasage , setMessage] = useState('welcome to our website!');// string 
  const [state , setState] = useState({ msg :" please login!" ,isLoggedin:false });//object 
  
  const clickHandler = ()=>{
    setMessage(' thanks for subscribing !!')
  }
  const loginHandler = ()=>{
    if(state.isLoggedin){
      setState({ isLoggedin : false , msg :"  please login! "})
    }
    else{
      setState({ isLoggedin : true , msg :" you are logged in welcome back "})
    }
    
  }
  console.log(' 123');
  return (
    <div className="App">
     <h1> React Intro</h1>

     <h3>{mesasage}</h3>

     <p> <button onClick= {clickHandler}> subscribe </button></p>
     <h3>{ state.msg}</h3>
     <p> <button onClick= {loginHandler}> {state.isLoggedin ? 'logout' : 'login'}  </button></p>
    </div>
  );
}

export default App;
