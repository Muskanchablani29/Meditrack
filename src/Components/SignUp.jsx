import React, { useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup, login } from '../Reducers/authReducers';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";
import image1 from './Images/meditrack.png';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(1);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const user = useSelector((state) => state.auth.user);

  // Handle form submission
  const handleSignup = (e) => {
    e.preventDefault();
    
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

    // Clear fields after successful signup
    setUsername('');
    setEmail('');
    setPassword('');

    // Automatically switch to login form
    setIsSignUpMode(false);
  };

  // Handle input focus/blur effects
  const handleInputFocus = (e) => {
    e.target.classList.add("active");
  };

  const handleInputBlur = (e) => {
    if (e.target.value === "") {
      e.target.classList.remove("active");
    }
  };

  // Toggle between sign-in and sign-up modes
  const toggleMode = useCallback(() => {
    setIsSignUpMode(prevMode => !prevMode);
  }, []);

  // Handle slider movement
  const moveSlider = useCallback((index) => {
    setActiveImageIndex(index);
  }, []);

  // Handle login input changes
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Handle login submission
  const handleLogin = useCallback((e) => {
    e.preventDefault();
    
    if (!user) {
      alert('No user found. Please sign up first.');
      return;
    }

    const { username, password } = credentials;
    if (username === user.username && password === user.password) {
      dispatch(login({ username, password }));
      alert('Login successful!');
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  }, [credentials, user, dispatch, navigate]);

  return (
    <main className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {/* Sign In Form */}
            <form onSubmit={handleLogin} autoComplete="off" className="sign-in-form">
              <div className="logo">
                <img src={image1} alt="meditrack" />
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registered yet?</h6>
                <a href="#" className="toggle" onClick={toggleMode}>Sign up</a>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    name="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Password</label>
                </div>

                <button type="submit" className="sign-btn">Sign In</button>

                <p className="text">
                  Forgotten your password or your login details?
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>

            {/* Sign Up Form */}
            <form onSubmit={handleSignup} autoComplete="off" className="sign-up-form" ref={formRef}>
              <div className="logo">
                <img src={image1} alt="meditrack" />
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <a href="#" className="toggle" onClick={toggleMode}>Sign in</a>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Password</label>
                </div>

                <button type="submit" className="sign-btn">Sign Up</button>

                <p className="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img 
                src="./img/WhatsApp Image 2025-02-25 at 1.05.19 PM.jpeg" 
                className={`image img-1 ${activeImageIndex === 1 ? 'show' : ''}`} 
                alt="" 
              />
              <img 
                src="./img/WhatsApp Image 2025-02-25 at 1.05.37 PM.jpeg" 
                className={`image img-2 ${activeImageIndex === 2 ? 'show' : ''}`} 
                alt="" 
              />
              <img 
                src="./img/WhatsApp Image 2025-02-25 at 1.05.47 PM.jpeg" 
                className={`image img-3 ${activeImageIndex === 3 ? 'show' : ''}`} 
                alt="" 
              />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group" style={{ transform: `translateY(${-(activeImageIndex - 1) * 2.2}rem)` }}>
                  <h2>Meditation help to Cure your Disease faster</h2>
                  <h2>Customize as you like</h2>
                  <h2>Invite students to your class</h2>
                </div>
              </div>

              <div className="bullets">
                {[1, 2, 3].map(index => (
                  <span 
                    key={index}
                    className={activeImageIndex === index ? "active" : ""} 
                    data-value={index}
                    onClick={() => moveSlider(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
