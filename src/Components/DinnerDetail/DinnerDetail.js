import React from 'react';
import './DinnerDetail.css';
import {Link, useHistory} from "react-router-dom";
const DinnerDetail = (props) => {
    const {name,imageURL, _id} = props.dn
    const history = useHistory()
    const handleAddFood = (id) =>{
        history.push(`/food${id}`)
   }
    return (
        <div className="box col-md-4 col-lg-4">
            <div>
            <img className="image" src={imageURL}alt=""/>
            <Link to={"/food/"+_id} onClick={()=>handleAddFood(_id)}className="foodName"><h5>{name}</h5></Link>
            </div>
        </div>
    );
};

export default DinnerDetail;