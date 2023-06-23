import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
//this should 
const HOSTNAME = 'http://localhost:5000';

const SelectedBreedDetails = () => {
    const {id} = useParams();
    const [selectedDog, setSelectedDog] = useState(); 
    const [error, setError] = useState(false)
    
    const getDogById = async (dogId) => {
        //as in dogbreedspage, i will also wrap this in try/catch and set the dog only if the response is successful 
        //you can even decide to create a screen in another component that shows only when there is an error across the webpage
        try{ const response = await fetch(`${HOSTNAME}/api/breeds/${dogId}`);
        const dogById = await response.json();
        setSelectedDog(res.dog_breed); }
        catch(err){
        console.log(error)
        //or extract message from error and paint into the component, in this second case initial state can be an empty screen
        setError(true)
        }
        
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
