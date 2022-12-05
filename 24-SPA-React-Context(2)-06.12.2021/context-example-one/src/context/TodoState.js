import React , { useState} from 'react';
import TodoContext from './TodoContext';

function TodoState(props) {
    const [ todos , setTodos ] = useState([]);
     // add todo 
    const addTodo = (str)=>{
        setTodos([...todos , str])    
      }
      // to delete todo
      const delTodo = (index)=>{
        const filtered = todos.filter((item , i)=>i !== index )
        setTodos(filtered);
      }
    return (
        <TodoContext.Provider value={{ todos , addTodo , delTodo }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState
