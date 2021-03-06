import React, { useState } from 'react';
import { useEffect } from 'react';
import LunchDetail from '../LunchDetail/LunchDetail';
import {Link} from "react-router-dom";
import { Spinner } from 'react-bootstrap';
const Lunch = () => {
    const [lunch, setLunch] = useState([])
    // console.log(foods)
    useEffect(() => {

    fetch('https://cryptic-hollows-46319.herokuapp.com/food')
    .then(res =>res.json())
    .then(data =>{
        // setFoods(data)
        const lunch = data.filter(food => food.type === 'lunch')
        setLunch(lunch)
        console.log(lunch)
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
              lunch.length === 0 && (
                <div id="loading" className="App mt-5">
               <Spinner animation="grow" variant="success" />
                </div>
               )
           }

        <div className="text-center mt-5 row container-fluid">
            {

            lunch.map(ln => <LunchDetail ln={ln}></LunchDetail>)


            }
        </div>
        </div>
    );
};

export default Lunch;