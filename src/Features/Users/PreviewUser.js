import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height : '50vh',
      width : '50vw'
    },
  };
  

const PreviewUser = ({user}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
   
  
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div>
        <button onClick={openModal} className='btn btn-blue'>View</button>
         <Modal
        isOpen={modalIsOpen}    
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='modalContainer'>
        <div className='formQuestion'>
        <div className='headingModal'>{user.name}</div>
        <div><button className='btn btn-red' onClick={closeModal}>close</button></div>
        </div>
       <div className='formDiv'>
       {Object.entries(user).map(entry => {
            let key = entry[0];
            let value = entry[1];      
            if(key !== "id" ){
              if(key !== "name"){
               return(
               <div className='cardSpecificDetails'>
                <div className='cardAsked'>{key}</div>
                <div>{value}</div>
               </div>
        )}}})} 

       </div>
       </div>
   </Modal>
    </div>
  )
}

export default PreviewUser