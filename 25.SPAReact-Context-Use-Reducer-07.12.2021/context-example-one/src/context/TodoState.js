import React , { useState , useReducer} from 'react';
import TodoContext from './TodoContext';
import TodoReducer from './TodoReducer';

function TodoState(props) {
   

    // const reducer = (state , action)=>{
    //   switch(action.type){
    //     case 'addTodo' :
    //       return [...state ,action.data ];
    //     case 'delTodo' :
    //       return state.filter(( item, index)=> index !== action.data);  
    //     default :
    //     return state 
    //   }
    
    // }

    const [ todos , dispatch ] = useReducer(TodoReducer , []);
     // add todo 
      const addTodo = (str)=>{        
       dispatch({ type:"addTodo" ,data:str })
      }
      // to delete todo
      const delTodo = (index)=>{        
        dispatch({ type:"delTodo" ,data:index })
      }
    return (
        <TodoContext.Provider value={{ todos , addTodo , delTodo }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState
