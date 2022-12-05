import './App.css';
import { useEffect , useState } from 'react';
import Spinner from './components/Spinner';
import Users from './components/Users';


function App() {
  const [name , setName ] = useState('');
  const [ message , setMessage ] = useState('');
  const [isWriting , setIsWriting] = useState(false)
  const submit = (event)=>{
    event.preventDefault();
    console.log(' submit the form');
    setIsWriting(false)
   
  }
  const changeHandler = (event)=>{
    
    setName(event.target.value);
    setIsWriting(true);
  }
  const loadMessage = (newName)=>{
    fetch(`https://json.versant.digital/.netlify/functions/fake-api/message/name/${newName}`)
    .then( response => response.json())
    .then( data =>  setMessage(data))    
  }
  useEffect(()=>{
    console.log(' render....');
    // we don't want to fetch if the user is writing => skip effect when the user is writing
    if(isWriting === true){
      return
    }
    loadMessage(name)

  },[name , isWriting])
  return (
    <div className="App">
     <h1> React useEffect with Fetch</h1> 
     <form onSubmit = { submit} >
       <input type ="text" onChange = { changeHandler}  />
       <button> set Name</button>
       </form> 
       {/* { isWriting && 'waiting.....'}  */}
      { !isWriting &&  <h4>{message}</h4>   }
       { isWriting && <Spinner />} 
       <Users />
    </div>
  );
}

export default App;
