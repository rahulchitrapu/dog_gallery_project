import React,{useState,useEffect} from 'react';


import SubBreadList from '../SubBread/SubBreadList';

import "./Popup.css";


function Popup({handleClose,clickedDog}) {
  
    const [subBreadName,setSubBreadName]=useState([]);
   useEffect(()=>{
        fetch(`https://dog.ceo/api/breed/${clickedDog.label}/list`)
        .then(res=>res.json())
        .then(data=>{
            setSubBreadName(data.message);
        })
   },[])
   
   const capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
   
    
    return (
        <div className='main_popup' >
           <div className='wrapper'>
                <div className='popup_navbar'>
                    
                    <h1 id='resultsfor_bread'>{capitalize(clickedDog.label)}</h1>
                    <h2 className='cancel' onClick={handleClose} >X</h2>
                </div>
                <div className='popup'  >
                    <h2>More images</h2>
                
                    {clickedDog.url[1]&&<img src={clickedDog.url[1]} alt={clickedDog.label}/>}
                    {clickedDog.url[2]&&<img src={clickedDog.url[2]} alt={clickedDog.label}/>}
                    {clickedDog.url[3]&&<img src={clickedDog.url[3]} alt={clickedDog.label}/>}
                    {clickedDog.url[4]&&<img src={clickedDog.url[4]} alt={clickedDog.label}/>}
                    

                    <hr></hr>
                    {subBreadName.length===0 ? <h2>{clickedDog.label} has no sub-breeds</h2>:<SubBreadList clickedDog={clickedDog} subBreadName={subBreadName}/>}
                </div>
            </div>
        </div>
    );
}

export default Popup;