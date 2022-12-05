import React ,{ useState , useEffect} from 'react'

function Users() {
    const [users , setUsers] = useState([]);
    const loadUsers = ()=>{
        fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(result => setUsers(result.data) )
    }
    useEffect(() => {
      loadUsers();
       
    }, [])

    return (
        <div>
            { users.length === 0 ? 
            'loading users....' :
           users.map( (item, index) =>{
               return <h4 key = { index}>{ item.first_name} </h4>
           })
            } 
        </div>
    )
}

export default Users
