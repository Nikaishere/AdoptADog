import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const HOSTNAME = 'http://localhost:5000';

const SelectedBreedDetails = () => {
    const {id} = useParams();
    const [selectedDog, setSelectedDog] = useState(); 
    
    const getDogById = async (dogId) => {
        const req = await fetch(`${HOSTNAME}/breeds/${dogId}`);
        const res = await req.json();
        console.log(res);
        setSelectedDog(res.dog_breed);  
    }

    useEffect(() => {
        getDogById(id);
    }, []);
    
    
    return (
        <div className="dog_card">
          <h1>Breed details </h1>
          {selectedDog && 
            <div>
                <div>Name: {selectedDog.name}</div>
                <div>Size: {selectedDog.size}</div>
            </div>
        } 

        </div>
    )
}


export default SelectedBreedDetails;