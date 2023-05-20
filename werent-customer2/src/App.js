import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import RentalPage from './RentalPage';
import PastBookingsPage from './PastBookingsPage';
import PastTransactionsPage from './PastTransactionsPage';
import ProfilePage from './ProfilePage';

function App() {
  return (

  <Routes>

      <Route exact path="/RentalPage" element={<RentalPage/>}  />
      <Route exact path="/PastBookingsPage" element={<PastBookingsPage/>} />
      <Route exact path="/PastTransactionsPage" element={<PastTransactionsPage/>} />
      <Route exact path="/ProfilePage" element={<ProfilePage/>} />

  </Routes>


  );
}


export default App;
