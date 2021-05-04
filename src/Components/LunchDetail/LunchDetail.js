import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const LunchDetail = (props) => {
    const {name,imageURL, _id} = props.ln
    const history = useHistory()
    const handleAddFood = (id) =>{
        history.push(`/food/${id}`)
        console.log(id)
   }
    return (
        <div className="box col-md-4 col-lg-4">
            <div>
            <img className="image" src={imageURL}alt=""/>
            <Link to={"/food/"+_id}  onClick={()=>handleAddFood(_id)}className="foodName">
            <h5>{name}</h5>
            </Link>
            </div>
        </div>
    );
};

export default LunchDetail;