import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLogin/>,
  },
  {
    path: "/UserLogin",
    element: <UserLogin/>,
  },
  {
    path: "/AdminLogin",
    element: <AdminLogin/>,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword/>,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/AdminHome",
    element: <AdminHome/>,
  },
  {
    path: "/AdminManagePosts",
    element: <AdminManagePosts/>,
  },
  {
    path: "/AdminManageUsers",
    element: <AdminManageUsers/>,
  },
  {
    path: "/AdminCustomerReportings",
    element: <AdminCustomerReportings/>,
  },
  {
    path: "/AdminLandmarkSuggestions",
    element: <AdminLandmarkSuggestions/>,
  },
  {
    path: "/AdminMaintenanceForm",
    element: <AdminMaintenanceForm/>,
  },
  {
    path: "/AdminReviews",
    element: <AdminReviews/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
