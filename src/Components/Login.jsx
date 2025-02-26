import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Reducers/authReducers';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!user) {
      alert('No user found. Please sign up first.');
      return;
    }

    if (inputUsername === user.username && inputPassword === user.password) {
      dispatch(login());
      alert('Login successful!');
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
