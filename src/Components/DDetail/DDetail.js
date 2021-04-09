import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DDetail = () => {
    const { id } = useParams()
    console.log('id',id)
    const [dfood, setDfood] = useState({})
    useEffect(() =>{

  fetch(`http://localhost:5001/dinner/${id}`)
  .then(res => res.json())
  .then(data => setDfood(data))
    }, [id])
    return (
        <div>
            <h1>Name: {dfood.name}</h1>
        </div>
    );
};

export default DDetail;