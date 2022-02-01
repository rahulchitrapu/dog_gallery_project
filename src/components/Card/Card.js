import React from 'react';
import "./Card.css";



function Card({dog,handleClickedPopup}) {
    const capitalize=(str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
   
    return (
        <div className='card' onClick={()=>{handleClickedPopup(dog)}} >
           
           {dog.url && <img  className='image' src={dog.url[0]}  alt="dog_image"/>}
           {dog.label && <h4 id="name">{capitalize(dog.label)}</h4>}
           
        </div>
    );
}

export default Card;