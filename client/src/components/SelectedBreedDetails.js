import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const HOSTNAME = 'http://localhost:5000';

const SelectedBreedDetails = () => {
    const {id} = useParams();
    const [selectedDog, setSelectedDog] = useState(); 
    
    const getDogById = async (dogId) => {
        const req = await fetch(`${HOSTNAME}/api/breeds/${dogId}`);
        const res = await req.json();
        console.log(res);
        setSelectedDog(res.dog_breed);  
    }

    useEffect(() => {
        getDogById(id);
    }, []);

    const [openModal, setOpenModal] = useState(false);

        const close = () => {
    setOpenModal(false);
    };
    
    
    return (
        <div className="dog_card">
          <h1 class="text-4xl font-extrabold py-3" align="center">Breed details </h1><br></br>
          {selectedDog && 
            <div className="details_container">
                <div >
                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" >
                        <li class="font-extrabold py-1">{selectedDog.name}</li>
                        <li class="font-extrabold py-1">{selectedDog.size} size</li>
                        <li class="font-extrabold py-1">{selectedDog.energy} energy</li>
                        <li class="font-extrabold py-1">{selectedDog.protectiveness}</li>
                        <li class="font-extrabold py-1">{selectedDog.trainability} trainability</li>
                        <li class="font-extrabold py-1">{selectedDog.shedding} shedding</li>
                    </ul>

                    <div class="" align="center"><img src= {selectedDog.image} alt="dog image"></img></div>
                </div>                          
            </div>
        } 
        </div>
    )
}


export default SelectedBreedDetails;