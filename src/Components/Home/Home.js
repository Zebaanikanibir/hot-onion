import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import Breakfast from '../Breakfast/Breakfast';
import './Home.css';
const Home = () => {
   
    return (    
        <div className="Home">
          <Breakfast></Breakfast> 
        </div>
    );
};

export default Home;