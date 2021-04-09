import React from 'react';
import './BreakfastDetail.css';
import {Link, useHistory} from "react-router-dom";
import { useEffect } from 'react';
const BreakfastDetail = (props) => {
    const{name,imageURL, _id} = props.br
    const history = useHistory()
    const handleAddFood = (id) =>{
        history.push(`/breakfast/${id}`)
   }

    return (
        <div className="box">
           <div>
           <img className="image" src={imageURL}alt=""/>
            <Link to={"/"+_id}  onClick={()=>handleAddFood(_id)}className="foodName">{name}</Link>
           </div>
        </div>
    );
};

export default BreakfastDetail;