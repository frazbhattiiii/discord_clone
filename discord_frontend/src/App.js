import React from 'react';
import { BrowserRouter as  Router, Routes,Route,Redirect} from "react-router-dom";
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import LoginPage from './authPages/LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';
import './App.css';
import AlertNotifications from './shared/components/AlertNotifications';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/"
        element={<Dashboard to="/dashboard" replace />}
    />
   
    </Routes>
    <AlertNotifications/> 
  </Router>
  );
}

export default App;
