import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HostRentingProperty from './HostRentingProperty';
import HostRentingRoomDetails from './HostRentingRoomDetails';
import HostRentingRoomLocation from './HostRentingRoomLocation';
import HostRentingRoomPricing from './HostRentingRoomPricing';
import HostRentingFlatDetails from './HostRentingFlatDetails';
import HostRentingFlatLocation from './HostRentingFlatLocation';
import HostRentingFlatPricing from './HostRentingFlatPricing';

function App() {
  return (
    <Routes>
      <Route exact path='/HostRentingProperty' element ={<HostRentingProperty/>} />
      <Route exact path='/HostRentingRoomDetails' element={<HostRentingRoomDetails/>} />
      <Route exact path='/HostRentingRoomLocation' element={<HostRentingRoomLocation/>} />
      <Route exact path='/HostRentingRoomPricing' element={<HostRentingRoomPricing/>} />
      <Route exact path='/HostRentingFlatDetails' element={<HostRentingFlatDetails/>} />
      <Route exact path='/HostRentingFlatLocation' element={<HostRentingFlatLocation/>} />
      <Route exact path='/HostRentingFlatPricing' element={<HostRentingFlatPricing/>} />
    </Routes>
  );
}

export default App;