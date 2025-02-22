// App.js
import React, { useState, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './Components/Home/Home';
// import ExplorePage from './Components/Explore';
import RedirectPage from './Components/Redirect';
import Remedies from './Components/Remedies/Remedies';

const ProtectedRoute = ({ children, redirectComplete }) => {
  if (!redirectComplete) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const App = memo(() => {
  const [redirectComplete, setRedirectComplete] = useState(false);

  // Separate route configurations for better maintainability
  const authenticatedRoutes = redirectComplete && (
    <>
      <Route 
        path="/home" 
        element={
          <ProtectedRoute redirectComplete={redirectComplete}>
            <HomePage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/explore" 
        element={
          <ProtectedRoute redirectComplete={redirectComplete}>
            {/* <ExplorePage /> */}
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/Remedies" 
        element={
          <ProtectedRoute redirectComplete={redirectComplete}>
            <Remedies />
          </ProtectedRoute>
        } 
      />
    </>
  );

  return (
    <Router>
      {redirectComplete && <Navbar setRedirectComplete={setRedirectComplete} />}
      <Routes>
        <Route 
          path="/" 
          element={
            <RedirectPage 
              setRedirectComplete={setRedirectComplete}
            />
          } 
        />
        {authenticatedRoutes}
        {/* Catch all route for unmatched paths */}
        <Route 
          path="*" 
          element={
            <Navigate to={redirectComplete ? "/home" : "/"} replace />
          } 
        />
      </Routes>
    </Router>
  );
});

// // Add display name for debugging
// App.displayName = 'App';

export default App;
