import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";


const users = localStorage.getItem('users')!= null ? JSON.parse(localStorage.getItem('users')):[];
const initialState = users;


const userSlice = createSlice({
    name: 'user',
    initialState ,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);           
            localStorage.setItem('users',JSON.stringify(state.map(user=>user)))
            
          },
          editUser: (state, action) => {
            const { id, name, dob,food,age,gender,hobbies } = action.payload;
            
            const existingUser = state.find(user => user.id === id);
            if(existingUser) {
              existingUser.name = name;
              existingUser.dob = dob;
              existingUser.food=food;
              existingUser.age=age;
              existingUser.gender=gender;
              existingUser.hobbies=hobbies;
            }
            const updatedUsers = [...state.filter(user=>user.id!== id),existingUser];
            localStorage.setItem('users',JSON.stringify(updatedUsers))

            
          

            
          },
          deleteUser: (state, action) => {
            const { id } = action.payload;
            const existingUser = state.find(user => user.id === id);
            if(existingUser) {
                localStorage.setItem('users',JSON.stringify(state.filter(user=>user.id !== id)))
                return state.filter(user => user.id !== id);
                

            }
            
          }
     
    }
  });
  
  export const { addUser,editUser,deleteUser } = userSlice.actions;
  export default userSlice.reducer;