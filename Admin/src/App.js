import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';

import { AdminLogin } from './AdminLogin';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/vanilla-zoom.min.css';
import { Register } from './Register';
import { GeneralLogin } from './GeneralLogin';
import { UserLogin } from './UserLogin';
import { ResetPassword } from './ResetPassword';
import { ForgotPassword } from './ForgotPassword';
import { AdminHome } from './AdminHome';
import { AdminCustomerReportings } from './AdminCustomerReportings';
import { AdminViewReporting } from './AdminViewReporting';
import { AdminManageUsers } from './AdminManageUsers';
import { AdminManagePosts } from './AdminManagePosts';
import { AdminViewPost } from './AdminViewPost';
import { AdminLandmarkSuggestions } from './AdminLandmarkSuggestions';
import { AdminLandmarkDetailed } from './AdminLandmarkDetailed';
import { AdminMaintenanceForm } from './AdminMaintenanceForm';
import { AdminAnalytics } from './AdminAnalytics';
import { AdminReviews } from './AdminReviews';



function App() {
  const [currentForm, setCurrentForm] = useState('login');
  return (
  
    
    <div className="App">

     <GeneralLogin/>
    </div>
  );
}

export default App;
