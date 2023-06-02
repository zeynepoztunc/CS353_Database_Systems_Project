import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HostRentingProperty from './HostRentingProperty';
import HostRentingRoomDetails from './HostRentingRoomDetails';
import HostRentingRoomLocation from './HostRentingRoomLocation';
import HostRentingRoomPricing from './HostRentingRoomPricing';
import HostRentingFlatDetails from './HostRentingFlatDetails';
import HostRentingFlatLocation from './HostRentingFlatLocation';
import HostRentingFlatPricing from './HostRentingFlatPricing';
import HostRentingMainPage from './HostRentingMainPage';
import HostRentingCurrentRents from './HostRentingCurrentRents';

import Register from './Register';
import GeneralLogin from './GeneralLogin';
import ForgotPassword from './ForgotPassword';

import AdminAnalytics from './AdminAnalytics';
import AdminCustomerReportings from './AdminCustomerReportings';
import AdminHome from './AdminHome';
import AdminLandmarkDetailed from './AdminLandmarkDetailed';
import AdminLandmarkSuggestions from './AdminLandmarkSuggestions';
import AdminLogin from './AdminLogin';
import AdminMaintenanceForm from './AdminMaintenanceForm';
import AdminManagePosts from './AdminManagePosts';
import AdminManageUsers from './AdminManageUsers';
import AdminReport from './AdminReport';
import AdminReviews from './AdminReviews';
import AdminViewPost from './AdminViewPost';
import AdminViewReporting from './AdminViewReporting';

//Customer Pages
import LeaveRating from './LeaveRating';
import MainPage from './MainPage';
import MapPage  from "./MapPage";
import PastBookingsPage from "./PastBookingsPage";
import PastTransactionsPage from "./PastTransactionsPage";
import PaymentPage from "./PaymentPage";
import ProfilePage from "./ProfilePage";
import RentalPage from "./RentalPage";
import ShoppingCart from "./ShoppingCart";
import UserLogin from "./UserLogin";


function App() {
  return (
    <Routes>
      <Route  path='/' element={<GeneralLogin/>} />
      <Route exact path='/HostRentingProperty' element ={<HostRentingProperty/>} />
      <Route exact path='/HostRentingRoomDetails' element={<HostRentingRoomDetails/>} />
      <Route exact path='/HostRentingRoomLocation' element={<HostRentingRoomLocation/>} />
      <Route exact path='/HostRentingRoomPricing' element={<HostRentingRoomPricing/>} />
      <Route exact path='/HostRentingFlatDetails' element={<HostRentingFlatDetails/>} />
      <Route exact path='/HostRentingFlatLocation' element={<HostRentingFlatLocation/>} />
      <Route exact path='/HostRentingFlatPricing' element={<HostRentingFlatPricing/>} />
        <Route exact path='/HostRentingMainPage' element={<HostRentingMainPage/>} />
        <Route exact path='/Register' element={<Register/>} />
        <Route exact path='/GeneralLogin' element={<GeneralLogin/>} />
        <Route exact path='/ForgotPassword' element={<ForgotPassword/>} />
        <Route exact path='/AdminAnalytics' element={<AdminAnalytics/>} />
        <Route exact path='/AdminCustomerReportings' element={<AdminCustomerReportings/>} />
        <Route exact path='/AdminHome' element={<AdminHome/>} />
        <Route exact path='/AdminLandmarkDetailed' element={<AdminLandmarkDetailed/>} />
        <Route exact path='/AdminLandmarkSuggestions' element={<AdminLandmarkSuggestions/>} />
        <Route exact path='/AdminLogin' element={<AdminLogin/>} />
        <Route exact path='/AdminMaintenanceForm' element={<AdminMaintenanceForm/>} />
        <Route exact path='/AdminManagePosts' element={<AdminManagePosts/>} />
        <Route exact path='/AdminManageUsers' element={<AdminManageUsers/>} />
        <Route exact path='/AdminReport' element={<AdminReport/>} />
        <Route exact path='/AdminReviews' element={<AdminReviews/>} />
        <Route exact path='/AdminViewPost' element={<AdminViewPost/>} />
        <Route exact path='/AdminViewReporting' element={<AdminViewReporting/>} />
        <Route exact path='/MainPage' element={<MainPage/>} />
        <Route exact path='/MapPage' element={<MapPage/>} />
        <Route exact path='/PastBookingsPage' element={<PastBookingsPage/>} />
        <Route exact path='/PastTransactionsPage' element={<PastTransactionsPage/>} />
        <Route exact path='/PaymentPage' element={<PaymentPage/>} />
        <Route exact path='/ProfilePage' element={<ProfilePage/>} />
        <Route exact path='/RentalPage' element={<RentalPage/>} />
        <Route exact path='/ShoppingCart' element={<ShoppingCart/>} />
        <Route exact path='/UserLogin' element={<UserLogin/>} />
        <Route exact path='/LeaveRating' element={<LeaveRating/>} />
        <Route exact path='/HostRentingCurrentRents' element={<HostRentingCurrentRents/>} />


        

    </Routes>
  );
}

export default App;