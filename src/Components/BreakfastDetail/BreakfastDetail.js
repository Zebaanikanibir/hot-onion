import React from 'react';
import './BreakfastDetail.css';
import {Link, useHistory} from "react-router-dom";
import { useEffect } from 'react';
const BreakfastDetail = (props) => {
    const{name,imageURL, _id} = props.br
    const history = useHistory()
    const handleAddFood = (id) =>{
        history.push(`/food/${id}`)
        console.log(id)
   }

    return (
        <div className="box col-md-4">
           <div>
           <img className="image" src={imageURL}alt=""/>
            <Link to={"/food/"+_id}  onClick={()=>handleAddFood(_id)}className="foodName">
            <h5>{name}</h5>
            </Link>
            
           </div>
        </div>
    );
};

export default BreakfastDetail;