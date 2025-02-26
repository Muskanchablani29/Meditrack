// App.js
import React, { useState, memo, lazy, Suspense, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import RedirectPage from './Components/Redirect';
import StoreProvider from './Store';
import { LOGIN } from './actions/authActions';

// Lazy load components
const HomePage = lazy(() => import('./Components/Home/Home'));
const ExplorePage = lazy(() => import('./Components/Explore/Explore'));
const Remedies = lazy(() => import('./Components/Remedies/Remedies'));
const SignUp = lazy(() => import('./Components/SignUp'));
const Profile = lazy(() => import('./Components/Login'));
const Meditation = lazy(() => import('./Components/Explore/Meditation'));
const Consult = lazy(() => import('./Components/Explore/DoctorConsult'));
const HomeRemedies = lazy(() => import('./Components/Explore/Homeremedies'));
const Appointment = lazy(() => import('./Components/Explore/BookAppointmentPage'));

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
  {
    path: '/home',
    element: HomePage,
    label: 'Home',
    exact: true
  },
  {
    path: '/explore',
    element: ExplorePage,
    label: 'Explore',
    exact: true
  },
  {
    path: '/Remedies',
    element: Remedies,
    label: 'Remedies',
    exact: true
  },
  {
    path: '/profile',
    element: Profile,
    label: 'Profile',
    exact: true
  },
  {
    path: '/Meditation',
    element: Meditation,
    label: 'Meditation',
    exact: true
  },
  {
    path: '/Consult',
    element: Consult,
    label: 'Consult',
    exact: true
  },
  {
    path: '/Homeremedies',
    element: HomeRemedies,
    label: 'Home Remedies',
    exact: true
  },
  {
    path: '/Appointment/:doctorName',
    element: Appointment,
    label: 'Appointment',
    exact: true
  },
  {
    path: '/signup',
    element: SignUp,
    label: 'Sign Up',
    exact: true
  },
  {
    path: '/login',
    element: Profile,
    label: 'Login',
    exact: true
  }
];

const App = memo(() => {
  const [redirectComplete, setRedirectComplete] = useState(false);

  // Memoized redirect handler
  const handleRedirectComplete = useCallback((value) => {
    setRedirectComplete(value);
  }, []);

  // Memoized authenticated routes
  const authenticatedRoutes = redirectComplete && (
    <>
      {ROUTES.map(({ path, element: Element, exact }) => (
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
    </>
  );

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
        
        {authenticatedRoutes}
        
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

// Add display names for debugging
App.displayName = 'App';
ProtectedRoute.displayName = 'ProtectedRoute';
LoadingSpinner.displayName = 'LoadingSpinner';

export default App;
