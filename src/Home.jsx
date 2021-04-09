import React from 'react';
import { NavLink } from 'react-router-dom';
import img2 from '../src/images/img3.jpg';
import Common from './Common';
const Home=()=>{
    return(
    <>
        <Common
           title="Grow Your Business with "
           link="Get Started"
           img={img2}
           to="/service"
       />
    </>
    );
}
export default Home;