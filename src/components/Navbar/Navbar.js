import React,{useState,useEffect} from 'react';
import CustomSearch from './CustomSearch';
import "./Navbar.css";


function Navbar({dogImages}) {
    const [customBtn,setCustomBtn]=useState(false);
    const [time,setTime]=useState(new Date().toLocaleTimeString());
   
    
    const handleClickCustom=()=>{
            setCustomBtn(!customBtn);
           
    }

    const handleClose=()=>{
        setCustomBtn(false);
    }
    useEffect(()=>{
        const timer=
            setInterval(()=>{
            let presentTime=new Date().toLocaleTimeString();
            setTime(presentTime);
          },1000);
          return()=>{
              clearInterval(timer)
          }
          
    },[setTime])
    
   
    
    return (
        <div className='navbar'>
           <div className='timer'>{time}</div>
            <h1 className='heading'>Dog Gallery</h1>
            <button id='custom_btn' onClick={handleClickCustom}>custom search</button>
            {customBtn && <CustomSearch dogImages={dogImages} handleClose={handleClose}/> }
            {/* <button onClick={handleClickCustom}>btn1</button>
            <button onClick={handleClose}>btn2</button> */}
        </div>
    );
}

export default Navbar;