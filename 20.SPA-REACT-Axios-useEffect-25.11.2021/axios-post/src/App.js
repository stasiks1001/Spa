import './App.css';
import { useState , useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ user ,setUser ] = useState();
  const createUser = ()=>{

    axios.post('https://reqres.in/api/users' , {
      name : "Mansour",
      job : "web developer"
    })
    .then( response => setUser(response.data))
  }
  useEffect(()=>{
  createUser();
  },[])
  return (
    <div className="App">
     <h1> Axios example  </h1>   
     { user && <div> <h4>{user.name}</h4>
     <h4>{user.id}</h4> 
     <h4>{user.job}</h4> 
     <h4>{user.createdAt}</h4> 
     </div>
     }  
    </div>
  );
}

export default App;
