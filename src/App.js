import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import WhyDoWe from './components/WhyDoWe'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import ConflictsAndConfusion from './components/ConflictsAndConfusion'
import Auth from './components/Auth';
import DoNamaste from './components/WhyDoWe/DoNamaste';



export default function App() {
  
    
  return (
   <>
   
      
      
      <Router>
      <Navbar/>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Home} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/whydowe" component={WhyDoWe} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/contactus" component={ContactUs} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/auth" component={Auth} />
          <Route path="/conflictandconfusion" component={ConflictsAndConfusion} />
          <Route path="/whydowedonamaste" component={DoNamaste} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Route to="/" />
        </Switch>
      </Router>
      
     
      </>
  );
}

 
