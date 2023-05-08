import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HostRentingProperty from './HostRentingProperty';
import HostRentingRoomDetails from './HostRentingRoomDetails';
import HostRentingRoomLocation from './HostRentingRoomLocation';
import HostRentingRoomPricing from './HostRentingRoomPricing';

function App() {
  return (
    <Routes>
      <Route exact path='/' element ={<HostRentingProperty/>} />
      <Route exact path='/HostRentingRoomDetails' element={<HostRentingRoomDetails/>} />
      <Route exact path='/HostRentingRoomLocation' element={<HostRentingRoomLocation/>} />
      <Route exact path='/HostRentingRoomPricing' element={<HostRentingRoomPricing/>} />
    </Routes>
  );
}

export default App;