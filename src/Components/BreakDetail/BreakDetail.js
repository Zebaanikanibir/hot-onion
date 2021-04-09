import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BreakDetail = () => {
    const { id } = useParams()
    console.log('id',id)
    const [food, setFood] = useState({})
    useEffect(() =>{

  fetch(`http://localhost:5001/breakfast/${id}`)
  .then(res => res.json())
  .then(data => setFood(data))
    }, [id])
    
    return (
        <div>
            <h1>Name: {food.name}</h1>
        </div>
    );
};

export default BreakDetail;