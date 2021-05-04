import React, { useEffect, useState } from 'react';
import DinnerDetail from '../DinnerDetail/DinnerDetail';
import {Link} from "react-router-dom";
import { Spinner } from 'react-bootstrap';
const Dinner = () => {
    const [dinner, setDinner] = useState([])
    // console.log(foods)
    useEffect(() => {

    fetch('https://cryptic-hollows-46319.herokuapp.com/food')
    .then(res =>res.json())
    .then(data =>{
        // setFoods(data)
        const dinner = data.filter(food => food.type === 'dinner')
        setDinner(dinner)
        console.log(dinner)
    } 
    )


    },[])
    return (
        <div className="mt-5">
            
            <div className="link3">
            <Link id="link1" to="/breakfast">Breakfast</Link>
            <Link  id="link3" to="/lunch">Lunch</Link>
            <Link id="link2" to="/dinner">Dinner</Link>
            
            </div>

            {
              dinner.length === 0 && (
                <div id="loading" className="App mt-5">
                <Spinner animation="grow" variant="success" />
                </div>
               )
           }
        <div className="display mt-5">
        {

        dinner.map(dn => <DinnerDetail dn={dn}></DinnerDetail>)


        }
        </div>
        </div>
    );
};

export default Dinner;