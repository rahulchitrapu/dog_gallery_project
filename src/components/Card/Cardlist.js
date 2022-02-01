import React from 'react';
import Card from './Card';
import "./Cardlist.css";

function Cardlist({filteredDogs,handleClickedPopup}) {
    
    return (
        <div className='cardList'>
            {
                filteredDogs.map((dog)=>{
                    
                    return <Card dog={dog} key={Math.random()} handleClickedPopup={handleClickedPopup}  />
                })
            }
        </div>
    );
}

export default React.memo(Cardlist);