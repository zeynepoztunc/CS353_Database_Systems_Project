import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HostRentingProperty from './HostRentingProperty';
import HostRentingRoomDetails from './HostRentingRoomDetails';

function App() {
  return (
    <Routes>
      <Route exact path='/' element ={<HostRentingProperty/>} />
      <Route exact path='/HostRentingRoomDetails' element={<HostRentingRoomDetails/>} />
    </Routes>
  );
}

export default App;