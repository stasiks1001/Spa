import React from 'react'

function TodoReducer(state , action) {
    switch(action.type){
        case 'addTodo' :
          return [...state ,action.data ];
        case 'delTodo' :
          return state.filter(( item, index)=> index !== action.data);  
        default :
        return state 
      }
}

export default TodoReducer
