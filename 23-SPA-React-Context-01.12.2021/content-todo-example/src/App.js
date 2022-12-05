import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UsersList } from './components/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(function (result) {
    //     setUsers(result.data);
    //   })

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resObj => console.log(resObj))
      // .then(data => setUsers(data))
  }, [])

  return (
    <div className="App">
      <UsersList users={users} />
    </div>
  );
}

export default App;
