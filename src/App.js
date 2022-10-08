import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import WhyDoWe from './components/WhyDoWe'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import ConflictsAndConfusion from './components/ConflictsAndConfusion'



export default function App() {
  
    
  return (
   <>
   
      
      
      <Router>
      <Navbar/>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home/>} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/whydowe" element={<WhyDoWe/>} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/contactus" element={ContactUs} />
          <Route path="/aboutus" element={AboutUs} />
          <Route path="/conflictandconfusion" element={<ConflictsAndConfusion/>} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Route to="/" />
        </Routes>
      </Router>
      
     
      </>
  );
}

 
