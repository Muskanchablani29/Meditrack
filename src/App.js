// App.js
import React, { useState, memo, lazy, Suspense, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import RedirectPage from './Components/Redirect';

// Lazy load components
const HomePage = lazy(() => import('./Components/Home/Home'));
const ExplorePage = lazy(() => import('./Components/Explore/Explore'));
const Remedies = lazy(() => import('./Components/Remedies/Remedies'));
const SignUp = lazy(() => import('./Components/SignUp'));
const Meditation = lazy(() => import('./Components/Explore/Meditation'));
const Consult = lazy(() => import('./Components/Explore/DoctorConsult'));
const HomeRemedies = lazy(() => import('./Components/Explore/Homeremedies'));
const Appointment = lazy(() => import('./Components/Explore/BookAppointmentPage'));
const About = lazy(() => import('./Components/About/About'));
const Footer = lazy(() => import('./Components/Footer'));
const Contact = lazy(() => import('./Components/Contact'));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="loading-spinner" role="alert" aria-busy="true">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
));

// Memoized Protected Route component
const ProtectedRoute = memo(({ children, redirectComplete }) => {
  if (!redirectComplete) {
    return <Navigate to="/" replace />;
  }
  return children;
});

// Route configuration
const ROUTES = [
  { path: '/home', element: HomePage, exact: true },
  { path: '/explore', element: ExplorePage, exact: true },
  { path: '/Remedies', element: Remedies, exact: true },
  { path: '/Meditation', element: Meditation, exact: true },
  { path: '/Consult', element: Consult, exact: true },
  { path: '/Homeremedies', element: HomeRemedies, exact: true },
  { path: '/Appointment/:doctorName', element: Appointment, exact: true },
  { path: '/signup', element: SignUp, exact: true },
  { path: '/About', element: About, exact: true },
  { path: '/Contact', element: Contact, exact: true }
];

const App = memo(() => {
  const [redirectComplete, setRedirectComplete] = useState(false);

  // Memoized redirect handler
  const handleRedirectComplete = useCallback((value) => {
    setRedirectComplete(value);
  }, []);

  return (
    <Router>
      {redirectComplete && (
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar setRedirectComplete={handleRedirectComplete} />
        </Suspense>
      )}
      
      <Routes>
        <Route 
          path="/" 
          element={
            <RedirectPage 
              setRedirectComplete={handleRedirectComplete}
            />
          } 
        />
        
        {redirectComplete && ROUTES.map(({ path, element: Element, exact }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            element={
              <ProtectedRoute redirectComplete={redirectComplete}>
                <Suspense fallback={<LoadingSpinner />}>
                  <Element />
                </Suspense>
              </ProtectedRoute>
            }
          />
        ))}
        
        <Route 
          path="*" 
          element={
            <Navigate to={redirectComplete ? "/home" : "/"} replace />
          } 
        />
      </Routes>
      
      {redirectComplete && (
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      )}
    </Router>
  );
});

// Add display names for debugging
App.displayName = 'App';
ProtectedRoute.displayName = 'ProtectedRoute';
LoadingSpinner.displayName = 'LoadingSpinner';

export default App;
