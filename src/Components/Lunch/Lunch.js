import React, { useState } from 'react';
import { useEffect } from 'react';
import LunchDetail from '../LunchDetail/LunchDetail';
import {Link} from "react-router-dom";
const Lunch = () => {
    const [lunch, setLunch] = useState([]);
    useEffect(() => {

    fetch('http://localhost:5001/lunch')
    .then(res =>res.json())
    .then(data => setLunch(data))
  
    },[])
    return (
        <div className="mt-5">
               <div className="link3">
            <Link id="link1" to="/breakfast">Breakfast</Link>
            <Link id="link2" to="/lunch">Dinner</Link>
            <Link  id="link3" to="/dinner">Lunch</Link>
            </div>
            

        <div className="display mt-5">
            {

            lunch.map(ln => <LunchDetail ln={ln}></LunchDetail>)


            }
        </div>
        </div>
    );
};

export default Lunch;