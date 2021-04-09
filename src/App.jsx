import React from 'react';
import { Switch,Route } from 'react-router';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
const App=()=>{
    return(
    <>
    <Navbar/>
    <Switch>
        
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/service' component={Service}/>
        <Route path='/' component={Home}/>
        
    </Switch>
    <Footer/>
    </>
    );
}
export default App;