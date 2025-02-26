import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../reducers/authReducer';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username && email && password) {
      dispatch(signup({ username, email, password }));
      navigate('/login');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Signup;