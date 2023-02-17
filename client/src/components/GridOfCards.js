import { motion,AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Overlay from "./Overlay.js";



const GridOfCards = ({dog_breeds}) => {
  // const [selectedId, setSelectedId] = useState(null)
  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  // const openModal = () => {
  //   setOpen(true);
  // };
  // const closeModal = () => {
  //   setOpen(false);
  // };

  const handleViewDetails = (id) => {
    
    console.log("animalId:", id)
    navigate(`/breeds/${id}`);
  }

  return (
    <div className="container">
        <div className="grid">
          {dog_breeds.map((dog_breed, index) => (
            <motion.div
              layoutId={index}
              // onClick={open}
              onClick={() => handleViewDetails(dog_breed.id)}
              className="card"
              key={dog_breed.id}
              whileHover={{ opacity: 1 }}
              // open={openModal}
            >
              <img
                className="card_image"
                alt={`Image of ${dog_breed.name}`}
                src={dog_breed.image}
              />
              <div className="card_footer">
                <h2 className="card_title">{dog_breed.name}</h2>
                {/* {open && <Overlay close={closeModal}></Overlay>} */}
              </div>
            </motion.div>
            
          ))}
          
        </div>
      </div>
  )
};





export default GridOfCards;
