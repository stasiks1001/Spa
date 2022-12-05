import './App.css';
import { useState ,useReducer } from 'react' ;
function App() {
  // const [ state, setState  ] = useState({ count : 1});
  // const addOne = ()=>{
  //   setState({ count : state.count + 1})
  // }
  // const decrement = ()=>{
  //   setState({ count : state.count - 1})
  // }

  // reducer function is used to return new state (updated state)
  const reducer = (state, action)=>{
    console.log(action);
    // if(action.type === 'increment'){
    //   return { count:state.count +1 }
    // }
    // else if(action.type ==='decrement'){
    //   return { count:state.count -1 }
    // }
    // else if(action.type ==='addTen'){
    //   return { count:state.count +10 }
    // }
    // else if(action.type ==='subTen'){
    //   return { count:state.count -10 }
    // }
    // return state
    switch(action.type){
      case  'increment':
        return { count:state.count +1 }
      case  'decrement':  
        return { count:state.count -1 }
      case  'addTen': 
        return { count:state.count +10 } 
      case  'subTen':  
        return { count:state.count -10 }
      case  'mulByTen':  
        return { count:state.count *10 }
    default :
    return state
    }

  }
  const [state , dispatch] = useReducer(reducer , {count : 1})
  return (
    <div className="App">      
     <h1> React useReducer</h1>     
     <h4> count value : {state.count}</h4>
     {/* <button onClick = {addOne}> + </button>
     <button onClick = {decrement}> - </button> */}
     <button onClick = {()=> dispatch({ type:'increment' })}> + </button>
     <button onClick = {()=> dispatch({ type:'decrement'})}> - </button>
     <button onClick = {()=> dispatch({ type:'addTen'})}> + 10 </button>
     <button onClick = {()=> dispatch({ type:'subTen'})}> - 10 </button>
     <button onClick = {()=> dispatch({ type:'mulByTen'})}> * 10 </button>


    </div>
  );
}

export default App;

