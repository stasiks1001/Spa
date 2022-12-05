// import './App.css';
// import { useRef } from 'react';

// function App() {
//   const nameRef = useRef();
//   const emailRef = useRef();

//   const submit = (event)=>{
//     event.preventDefault()
//     console.log(' name value ', nameRef.current.value);
//     console.log(' email value ', emailRef.current.value);
//     //nameRef.current.style.border ="1px solid red"
//     if(nameRef.current.value ===""){
//       alert(' please provide your name!')
//     }
//   }
//   return (
//     <div className="App">
//      <h1>Uncontrolled Component</h1>
//      <form onSubmit = {submit}>
//        <div> 
//          Name :<input type="text" name="name" ref={nameRef} />
//        </div>
//        <div>   
//        Email: <input type="email" name="email" ref= {emailRef} />      
//        </div> 
//        <input type="submit" value ="Submit" />       
//     </form>     
//     </div>
//   );
// }

// export default App;


// ############# controlled component ################# 
// rfce
 import React , { useState} from 'react';
 import './App.css';

 
 function App() {
  // const [name , setName] = useState("")
  // const [email , setEmail ] = useState("");
  // const [address , setAddress ] = useState("");
  const [ user , setUser] = useState({ 
    name :"",
    email:"",
    address:""
  })
  // const nameHandler = (e)=>{
  //   setName(e.target.value)
  // }
  const changeHandler = (e)=>{
     //console.log(e.target.value);
     setUser({
       ...user, // all the previous values
       [e.target.name] : e.target.value  // new key : value
       })
  }
  const submit = (e)=>{
    e.preventDefault();
    // console.log("Name value:" , name);
    // console.log("Email value:", email);
    console.log(user.name);
  }
   return (
    <div className="App">
          <h1>Uncontrolled Component</h1>
          <form onSubmit = {submit}  >
            <div> 
              Name :<input type="text" name="name" value = {user.name} onChange= {changeHandler} required  />
            </div>
            <div>   
            Email: <input type="email" name="email"  value = {user.email} onChange = {changeHandler} required  />      
            </div>
            <div>
             Address :<input type ="text" name ="address" value = {user.address} onChange={changeHandler} />
            </div>   
            <input type="submit" value ="Submit" />       
         </form>     
         </div>
   )
 }
 
 export default App
 
