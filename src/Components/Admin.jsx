import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Products from './Products';
import AboutUs from './AboutUs';
import Withus from './Withus';
import Footer from './Footer';
import WindingMissions from './WindingMissions';
import WindingModelDetails from './WindingModelDetails'; 
import ScrollToTop from './ScrollToTop';
import Support_services from './Support_services';
import ProcessingMissions from './Processing/ProcessingMissions';
import ProcessingModelDetails from './Processing/ProcessingModelDetails';
import TestingMissions from './testing/TestingMissions';
import TestingModelDetails from './testing/TestingModelDetails';
import FinalTestingModelDetails from './FinalTesting/FinalTestingModelDetails';
import FinalTestingMissions from './FinalTesting/FinalTestingMissions';

const Admin = () => {
  return (
    <>
    <ScrollToTop/>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/winding" element={<WindingMissions />} />
        <Route path="/products/winding/:modelId" element={<WindingModelDetails />} /> {/* ✅ added */}
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Withus/>}/>
        <Route path="/support-services" element={<Support_services/>}/>
        <Route path="/products/processing" element={<ProcessingMissions/>} />
        <Route path="/products/processing/:modelId" element={<ProcessingModelDetails/>} />
        <Route path="/products/testing" element={<TestingMissions/>} />
        <Route path="/products/testing/:modelId" element={<TestingModelDetails/>} />
        <Route path="/products/final-testing" element={<FinalTestingMissions/>} />
        <Route path="/products/final-testing/:modelId" element={<FinalTestingModelDetails/>}/>



      </Routes>

      <Footer/>
    </>
  );
}

export default Admin;
