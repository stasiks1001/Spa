import React , {useReducer , useState} from 'react';

import NotificationsContext from './NotificationsContext';

function NotificationsState(props) {
   
    //const [state , setState] = useState([]) 
    const reducer = (state, action)=>{
        console.log(action.payload);
        switch(action.type){
            case 'add' :
                return [...state , action.payload];
            case 'remove' : 
                return state.filter(item => item.id !== action.payload);
            default : 
            return state;        
        }

    }
    const [ state , dispatch ] = useReducer(reducer , []);
    
    const addNotification = (msg , type )=>{
        const id = Date.now();
        const data = { id , msg , type}
        //setState([...state , { msg , id ,type} ])
        dispatch({ type :'add' , payload :data   })
       
    }
    const removeNotification = (id)=>{      
       
         // setState(state.filter((item, index)=> item.id !== id ))
         dispatch({ type :'remove' , payload : id   })
       
      

    }
    return (
        <NotificationsContext.Provider value = {{state , addNotification , removeNotification }}>
            { props.children}
        </NotificationsContext.Provider>
    )
}

export default NotificationsState