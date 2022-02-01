import React,{useEffect,useState} from 'react';

import "./SubBread.css";

function SubBread({subName,clickedDog}) {
    const [subBreadImg,setSubBreadImg]=useState([])
    useEffect(()=>{
        fetch(`https://dog.ceo/api/breed/${clickedDog.label}/${subName}/images`)
        .then(res=>res.json())
        .then(data=>{
            setSubBreadImg(data.message);
            
        })
        
    },[])
    return (
        
            
        <div className='sub-breed-card'>
            
            <img className='image' src={subBreadImg[1]} alt='image'/>
            
            <h4>{subName}</h4>
            
        </div>
        
    );
}

export default SubBread;