import React from 'react';

const LunchDetail = (props) => {
    const {name,imageURL} = props.ln
    return (
        <div className="box">
            <img className="image" src={imageURL}alt=""/>
            <p className="foodName">{name}</p>
        </div>
    );
};

export default LunchDetail;