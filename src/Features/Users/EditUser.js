import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {editUser} from './UserSlice'
import { useNavigate, useParams } from 'react-router-dom';
import "./User.scss"




const EditUser = () => {
  const params = useParams();  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(store => store.users);
  console.log(users);
  console.log("afters")
  console.log(params);

  const existingUser = users.filter(user => user.id === params.id);
  const { name, dob,food,age,gender,hobbies } = existingUser[0];

  const [formData, setFormData] = useState({
    name: name,
    dob: dob,
    food: food,
    age: age,
    gender : gender,
    hobbies: hobbies,
  });

  const handleInputChange = (event) => {
    const { name, dob,food,age,gender,hobbies } = event.target;
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); 
    dispatch(editUser({
      id : params.id,
      name : formData.name,
      dob: formData.dob,
      food:formData.food,
      age: formData.age,
      gender : formData.gender,
      hobbies :formData.hobbies
    }))
    setFormData({name:'',dob:'',food:'pizza',age:'',gender:'male',hobbies:''});
    navigate('/')  
  };
    
  return (
    <div className='editContainer'>     
        <div className='editUserHeading'>Edit An Existing User Details</div>
        <div className='formDiv editDiv'>
       <form onSubmit={handleSubmit}>
        <div className='formQuestion'>
        <div>Name</div>
        <div>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        
        </div>
        
        <div className='formQuestion'>
        <div>Date of Birth</div>
          <div>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
      </div>
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
  )
}

export default EditUser