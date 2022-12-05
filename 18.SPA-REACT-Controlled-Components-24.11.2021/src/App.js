import React, { useRef, useState } from 'react';
import './App.css';

export default function App() {
  // const [bg, setBg] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const formRef = useRef();   // -> formRef: {current: `<form> </form>`}

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(userData);
    // setBg(true);
    formRef.current.style.background = 'green';   // let formVar = {current: document.querySelector('form')}; formVar.current.style.background = 'white';
  }

  const handleUsername = ev => setUserData({ ...userData, username: ev.target.value });
  const handleEmail = ev => setUserData({ ...userData, email: ev.target.value });
  const handlePassword = ev => setUserData({ ...userData, password: ev.target.value });

  return (
    <div className="App">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
      // style={{ background: bg && 'red' }}
      >
        <input type="text" value={userData.username} onChange={handleUsername} placeholder="enter username" /><br />
        <input type="email" value={userData.email} onChange={handleEmail} placeholder="enter email" /><br />
        <input type="password" value={userData.password} onChange={handlePassword} placeholder="enter password" /><br />
        <input type="submit" value="send" />
      </form>
    </div>
  );
}