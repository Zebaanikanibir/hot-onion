import React, { useEffect, useState } from 'react';
import DinnerDetail from '../DinnerDetail/DinnerDetail';
import {Link} from "react-router-dom";
const Dinner = () => {
    const [dinner, setDinner] = useState([]);
    useEffect(() => {

    fetch('http://localhost:5001/dinner')
    .then(res =>res.json())
    .then(data => setDinner(data))
  
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

        dinner.map(dn => <DinnerDetail dn={dn}></DinnerDetail>)


        }
        </div>
        </div>
    );
};

export default Dinner;