import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  async function getToken() {
    const res = await axios.post(`http://localhost:3000/user_token`, {
      auth: {
        email: emailValue,
        password: passwordValue,
      },
    });
    onLogin(res.data.jwt);
  }

  return (
    <div>
      <input
        placeholder='Email'
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        placeholder='Password'
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <button onClick={getToken}>Login</button>
    </div>
  );
};

export default Login;
