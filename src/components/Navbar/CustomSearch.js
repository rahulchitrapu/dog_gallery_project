import React, { useState, useEffect} from 'react';
import "./CustomSearch.css";

function CustomSearch({handleClose,dogImages}) {
    const [selectedOption, setOption] = useState('');
    const [number, setNumber] = useState();
    const [customImg, setCustomImg] = useState([]);
    const [isRender, setRender] = useState(false);

    const handleOption = (dog) => {
        
        setOption(dog.target.value)
    }
    const handleInput = (num) => {
        
        setNumber(num.target.value)
    }
    let option = dogImages.map((dog) => {
        return <option>{dog.label}</option>
    })

    const handleSubmit = useEffect(() => {
        if(number && selectedOption){
        setRender(true)
        fetch(`https://dog.ceo/api/breed/${selectedOption}/images/random/${number}`)
            .then(response => response.json())
            .then(data => {
              
                setCustomImg(data.message);
            })
        }
    },[number,selectedOption])
    
    return (
    <div className="main_Popup">    
        <div className="Wrapper">
            <div className="popup_navbar fixed">
                <h3>Custom Search</h3>
                <div className="cancel-symbol cancel" onClick={handleClose}>x</div>
            </div>
            <div className="Popup">
                <div className='grid'>
                    <select placeholder="Select a Breed" className="select" onChange={handleOption} required >
                        <option hidden value='default'>Select a Breed</option>
                        {option}
                    </select>
                    <input type="number" placeholder="Number of Images" className='input-box' onChange={handleInput}  ></input>
                    <button type="submit" className='button' onClick={handleSubmit}>GET IMAGES</button>
                </div>
                <div className='img-cont'>
                    
                    {isRender &&
                        <div>
                        
                        {number===0 && <h3>Please enter number of Images</h3>}
                        
                        <h3>{`Showing ${number} images of ${selectedOption}`}</h3>
                            {customImg && customImg.map((image) => {
                                
                                return <img src={image} alt='dog'></img>
                            })}
                        </div>
                    }

                </div>
            </div>
        </div>
    </div>

)
        
}

export default CustomSearch;