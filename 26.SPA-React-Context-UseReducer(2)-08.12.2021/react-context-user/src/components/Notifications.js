import React , {useContext} from 'react'
import NotificationsContext from '../context/notifications/NotificationsContext'
function Notifications() {
    const { state, removeNotification } = useContext(NotificationsContext)
    return (
        <div className="mt-3">
            {
                state.map((item)=>{
                return  <div key={item.id} className={`alert alert-${item.type} alert-dismissible fade show`}  role="alert">
                        {item.msg}
                        <button onClick ={ ()=> removeNotification(item.id)} data-bs-dismiss="alert"  type="button" className="btn-close"  aria-label="Close"></button>                        
                        </div>

                        

            })
            }
        </div>
    )
}

export default Notifications