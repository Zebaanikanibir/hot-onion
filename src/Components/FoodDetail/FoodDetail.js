import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Form, Button } from 'react-bootstrap';
import './FoodDetail.css';
const FoodDetail = () => {
    const { id } = useParams()
    console.log(id)
    const [food, setFood] = useState({})
    console.log(food)
    useEffect(() => {
        fetch(`https://cryptic-hollows-46319.herokuapp.com/food/${id}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [id])

    return (
        <div className="App">
               <img src={food.imageURL} alt=""/>
                <Card>
                    <Card.Body>
                    <Card.Title id="foodName">{food.name}</Card.Title>
                    <Card.Text id="text">
                    <p>INGREDIENT: {food.ingredients}</p>
                    <p>Recipe: {food.recipe}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>


        </div>
    );
};

export default FoodDetail;