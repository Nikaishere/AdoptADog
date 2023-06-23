import React, { useEffect, useState } from "react";
import GridOfCards from "./GridOfCards";
import Listing from "./Listing.js";


//const url = "http://localhost:5000";

function DogBreedsPage() {
  //stick to camelCase convention 
  const [dogBreeds, setDogBreeds] = useState([]);
  const [error, setError] = useState("");

  const getDogBreeds = async () => {
     try {
  const response = await fetch('https://adoptadog.herokuapp.com/breeds');
  const data = await response.json();
  //add a check to do the setDogBreeds only if there is something in data or you can extract the response status
//if(data.length...){}
  //what is inside data if you log it? to check if there is mismatch of names
  setDogBreeds(data.dog_breeds);   
    } catch(error) {
      console.log(error)
    }

    };
  
  useEffect(() => {
    getDogBreeds();
  }, []);
//you don't need <></> if only one element
//Since its a custom component you can close it without double tag
  return (
      <GridOfCards dogBreeds={dogBreeds} />    
  ); 
}

export default DogBreedsPage;






  
