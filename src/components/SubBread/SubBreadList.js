import React from 'react';
import SubBread from './SubBread';
import "./SubBreadList.css";
function SubBreadList({subBreadName,clickedDog}) {
    
    return (
        <div>
            <h2>Sub breed </h2>
            <div className='cardlist'>
                {subBreadName.map((subName)=>{
                    return <SubBread key={Math.random()}  subName={subName} clickedDog={clickedDog}/>
                })}
            </div>
        </div>
        
        
    )
    
}

export default SubBreadList;