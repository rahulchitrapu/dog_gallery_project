import React, { useEffect,useState } from 'react';

import Cardlist from '../Card/Cardlist';
import "./Homepage.css";
import Searchbar from './Searchbar';
import Popup from '../Popup/Popup';
import Navbar from '../Navbar/Navbar';


function Homepage() {
    
    const [dogImages,setDogimages]=useState([]);
    const [search,setSearch]=useState("");
    const [clickedDog,setclickedDog]=useState({});
    const[isPopup,setPopup]=useState(false);
    
   

  
    
//USE EFFECT
 
useEffect(()=>{
    const fetchingData=async()=>{
        const data=await fetch(`https://dog.ceo/api/breeds/list/all`)
        const fetchedData= await data.json();
            
        let arrOfDogNames=Object.keys(fetchedData.message);
        
        let imagearray=[];
        await Promise.all(arrOfDogNames.map(async (dogname) => {
            const data= await fetch(`https://dog.ceo/api/breed/${dogname}/images`);
            const pics= await data.json();
                
            const obj={label:dogname,url:pics.message}
            imagearray.push(obj);
            
        }
        ));
        setDogimages(imagearray);
    }
    fetchingData();  
},[])
const handleChange=(mess)=>{
    setSearch(mess);
   }
const filteredDogs=dogImages.filter((dog) => {
    return dog.label.toLowerCase().includes(search.toLowerCase())
  })

const handleClickedPopup=(selectedDog)=>{
    setPopup(true);
    setclickedDog(selectedDog);
}
const handleClose=()=>{
    setPopup(false);
    setclickedDog({})
}


    return (
        <div >
            <div className='navbar'><Navbar dogImages={dogImages}/></div>
            <Searchbar handleChange={handleChange}/>
            <div className='cardlist'>
            
            {isPopup&& <Popup handleClose={handleClose} clickedDog={clickedDog} filteredDogs={filteredDogs} />}
                <ul className='cardlist'>
                    
                    
                    <Cardlist  filteredDogs={filteredDogs} handleClickedPopup={handleClickedPopup} />
                    
                </ul>
            </div>
            
           
        </div>
    );
}

export default Homepage;