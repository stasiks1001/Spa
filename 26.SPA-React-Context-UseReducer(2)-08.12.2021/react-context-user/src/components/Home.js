import React , {useContext} from 'react';
import Notifications from './Notifications';
import NotificationsContext from '../context/notifications/NotificationsContext';

function Home() {
   const { addNotification} = useContext(NotificationsContext)
    return (
        <div className="App">
          <h2> Home Component</h2> 
          <button onClick={  ()=> addNotification(' this is success message', 'success')  } > success message </button>
          <button onClick={  ()=> addNotification(' this is warning message', 'warning')  } > warning message </button>
          <button onClick={  ()=> addNotification(' this is info message', 'info')  } > info message </button>
          <button onClick={  ()=> addNotification(' this is danger message', 'danger')  } > danger message </button>
          <Notifications /> 
        </div>
    )
}

export default Home
