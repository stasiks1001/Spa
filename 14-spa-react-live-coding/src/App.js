import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {

  const [users, setUsers] = useState([
    { id: 1, name: 'nour', email: 'nour@gmail.com', avatar: "https://reqres.in/img/faces/1-image.jpg" },
    { id: 2, name: 'michelle', email: 'michelle@gmail.com', avatar: "https://reqres.in/img/faces/2-image.jpg" },
    { id: 3, name: 'bashar', email: 'bashar@gmail.com', avatar: "https://reqres.in/img/faces/3-image.jpg" },
    { id: 4, name: 'benraiss', email: 'benraiss@gmail.com', avatar: "https://reqres.in/img/faces/4-image.jpg" },
    { id: 5, name: 'fabian', email: 'fabian@gmail.com', avatar: "https://reqres.in/img/faces/5-image.jpg" },
  ]);

  return (
    <div className="main" style={{ display: 'flex' }}>
      {users.map((user) => <Card key={user.id} userData={user} />)}
    </div>
  );
}

export default App;
