import React from 'react';
import img2 from '../src/images/img6.jpg';
import Common from './Common';
const About=()=>{
    return(
    <>
       <Common
           title="Welcome to About Page"
           link="Contact"
           img={img2}
           to="/contact"
       />
    </>
    );
}
export default About;