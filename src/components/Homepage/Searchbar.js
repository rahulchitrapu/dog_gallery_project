
import React,{useState} from 'react';

import "./Searchbar.css";
function Searchbar({handleChange}) {
    return (    
        <div className='search'>
            <input  placeholder='search your favourite breed' id='searchbar'  onChange={(e)=>{handleChange(e.target.value)}}/>
            
        </div>
    );
}

export default Searchbar;