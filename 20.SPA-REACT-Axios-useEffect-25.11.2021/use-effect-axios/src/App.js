import { useState , useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ catImg , setCatImg ] = useState(null);

//  useEffect(()=>{

//   fetch('https://aws.random.cat/meow')
//   .then(response => response.json())
//   .then( data => setCatImg(data.file))

//  },[])

// useEffect(()=>{
//   axios.get('https://aws.random.cat/meow')
//     .then(response => setCatImg(response.data.file))

// },[]);

async function getImgFetch(){

  const response = await fetch('https://aws.random.cat/meow');
  const data = await response.json();
  console.log('getImgFetch',data);  
}
async function getImgAxios(){
  const response = await axios.get('https://aws.random.cat/meow');
  console.log('getImgAxios' ,response.data);
  setCatImg(response.data.file)

}
useEffect(()=>{
  //getImgFetch()
  getImgAxios()
},[])

  return (
    <div className="App">
     <h1> Fetch with useEffect</h1>     
    { catImg !== null ?  <img src={catImg} /> : 'we have no image yet'} 
    </div>
  );
}

export default App;
