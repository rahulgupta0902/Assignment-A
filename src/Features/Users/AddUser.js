import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {addUser} from './UserSlice'
import "./User.scss"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height : '50vh',
    width : '50vw',
   
  },
};
const customStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height : '70vh',
    width : '100vw'
  },
};


const AddUser = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    food: 'pizza',
    age: '',
    gender : 'male',
    hobbies: '',
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); 
    dispatch(addUser({
      id : uuidv4(),
      name : formData.name,
      dob: formData.dob,
      food:formData.food,
      age: formData.age,
      gender : formData.gender,
      hobbies :formData.hobbies
    }))
    setFormData({name:'',dob:'',food:'pizza',age:'',gender:'male',hobbies:''});
    closeModal();
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal} className='btn btn-yellow'>Add User</button>
      <Modal  isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <div className='modalContainer'>
        <div className='formQuestion'>
          <div className='headingModal'>Add A User</div>
          <div><button className='btn btn-red' onClick={closeModal}>close</button></div>
        </div>
       <div className='formDiv'>
        <form onSubmit={handleSubmit}>
          <div className='formQuestion'>
            <div>Name</div>
            <div><input type="text" name="name" value={formData.name} onChange={handleInputChange}/></div>
          </div>        
          <div className='formQuestion'>
            <div>Date of Birth</div>
            <div><input type="date"name="dob"value={formData.dob} onChange={handleInputChange}/></div>
          </div>
          <div className='formQuestion'>
            <div>Favorite Food</div>
          <div>
            <select name="food" value={formData.food} onChange={handleInputChange}>
              <option value="pizza">Pizza</option>
              <option value="burger">Burger</option>
              <option value="pasta">Pasta</option>
            </select>
          </div>
        </div>      
        <div className='formQuestion'>
        <div>Age</div>
          <div>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          </div>
        </div>
      
        <div className='formQuestion'>
          <div>Gender</div>
          <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
            />
            Female
          </label>
          </div>
        </div>
        <div className='formQuestion'>
          <div>Hobbies</div>
          <textarea
            name="hobbies"
            value={formData.hobbies}
            onChange={handleInputChange}
          />
        </div>      
        <div className='submitBtn' ><div><button className='btn btn-green' type="submit">Submit</button></div></div>
      </form>       
      </div>       
      </div>
      </Modal>
    </div>
  )
}

export default AddUser