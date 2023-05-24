import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import RentalPage from './RentalPage';
import PastBookingsPage from './PastBookingsPage';
import PastTransactionsPage from './PastTransactionsPage';
import ProfilePage from './ProfilePage';
import MainPage from './MainPage';
import PaymentPage from './PaymentPage';
import ShoppingCart from './ShoppingCart';
import LeaveRating from './LeaveRating';
import MapPage from './MapPage';


function App() {
  return (

  <Routes>

      <Route exact path="/RentalPage" element={<RentalPage/>}  />
      <Route exact path="/PastBookingsPage" element={<PastBookingsPage/>} />
      <Route exact path="/PastTransactionsPage" element={<PastTransactionsPage/>} />
      <Route exact path="/ProfilePage" element={<ProfilePage/>} />
      <Route exact path ='/MainPage' element={<MainPage/>} />
      <Route exact path ='/PaymentPage' element={<PaymentPage/>} />
      <Route exact path ='/ShoppingCart' element={<ShoppingCart/>} />
      <Route exact path ='/LeaveRating' element={<LeaveRating/>} />
      <Route exact path ='/MapPage' element={<MapPage/>} />


  </Routes>


  );
}


export default App;
