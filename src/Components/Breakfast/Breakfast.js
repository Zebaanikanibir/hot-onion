import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BreakfastDetail from '../BreakfastDetail/BreakfastDetail';
import {Link} from "react-router-dom";
import './Breakfast.css';
const Breakfast = () => {
    // const [foods, setFoods] = useState([]);
    const [breakfast, setBreakfast] = useState([])
    // console.log(foods)
    useEffect(() => {

    fetch('https://cryptic-hollows-46319.herokuapp.com/food')
    .then(res =>res.json())
    .then(data =>{
        // setFoods(data)
        const breakfast = data.filter(food => food.type === 'breakfast')
        setBreakfast(breakfast)
        console.log(breakfast)
    } 
    )


    },[])
    
    
    return (

        <div className="mt-5">   
             <div className="link3">
            <Link id="link1" to="/breakfast">Breakfast</Link>
            <Link id="link2" to="/lunch">Lunch</Link>
            <Link  id="link3" to="/dinner">Dinner</Link>
            </div>
            
            {
              breakfast.length === 0 && (
                <div id="loading" className="App mt-5">
                <Spinner animation="border" variant="primary" />
                </div>
               )
           }
        <div className="display mt-5">
        {

        breakfast.map(br => <BreakfastDetail br={br}></BreakfastDetail>)


        }
        </div>
        </div>
    );
};

export default Breakfast;