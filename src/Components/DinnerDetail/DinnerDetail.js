import React from 'react';
import './DinnerDetail.css';
import {Link, useHistory} from "react-router-dom";
const DinnerDetail = (props) => {
    const {name,imageURL, _id} = props.dn
    const history = useHistory()
    const handleAddFood = (id) =>{
        history.push(`${id}`)
   }
    return (
        <div className="box">
            <div>
            <img className="image" src={imageURL}alt=""/>
            <Link to={"/"+_id} onClick={()=>handleAddFood(_id)}className="foodName">{name}</Link>
            </div>
        </div>
    );
};

export default DinnerDetail;