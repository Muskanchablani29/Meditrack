import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../Reducers/authReducers';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !email || !password) {
      alert('All fields are required');
      return;
    }

    if (/\s/.test(username)) {
      alert('Username cannot contain spaces');
      return;
    }

    dispatch(signup({ username, email, password }));
    alert('Signup successful! Please log in.');
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid">
                  <button type="button" className="btn btn-primary" onClick={handleSignup}>
                    Sign Up
                  </button>
                </div>
                <p className="text-center mt-3">
                  Already have an account? <NavLink to="/login">Login</NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
