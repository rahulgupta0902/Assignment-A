import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import AddUser from '../Features/Users/AddUser'
import {Link, useNavigate } from "react-router-dom"
import { deleteUser } from '../Features/Users/UserSlice'
import "./Dashboard.scss"
import PreviewUser from '../Features/Users/PreviewUser'


const Dashboard = () => {
  let users = useSelector(store=>store.users); 
  const navigate = useNavigate();
  const dispatch =useDispatch(); 
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));   
  }
  const [page,setPage] = useState(1);
  const limit = 6;
  const [data,setData] = useState([])
  useEffect(()=>{
    setData(users.slice(Math.max(page -1,0)*limit,page*limit))    
  },[page,users])  
  const handlePageNumber =(slide)=>{
    setPage(slide)
  }
  const userCard = (user)=>{
    return (
      <div className='userCardContainer'>
        <div className='cardNameHeading'>
          <div className='cardName' >{user.name}</div>         
          <div className='ageColor' style={{backgroundColor:user.age<25?"green":user.age<50?"purple":"orange"}}></div>
        </div>
        <div className='cardDetails'>
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
        <div className='cardButtons'>
          <div> <button className='cardButtons btn btn-red'onClick={() => handleRemoveUser(user.id)}>Delete</button></div>
          <div> <PreviewUser user = {user}/> </div>
          <div><Link to={`edit-user/${user.id}`} style={{textDecoration:"none"}}><button className='cardButtons btn btn-green' style={{textDecoration:"none"}}>Edit</button></Link></div>
        </div>
      </div>)}

  return (
    <div className='dashboardContainer'>
     <div className='dashboardTitle'>
      <div className='dashboardTitleHeading'>List of Users</div>
      <div><AddUser/></div>
     </div>
     <div className='userListDashboard'>
      {data.length ? data.map(user=>userCard(user)) :<div className='noUsersContainer'><div className='noUsersDiv'>No Users Currently</div></div>
      }      
     </div>
     <div className='pageButtons'>
      <button className="btn btn-blue pagebtn" onClick={()=>handlePageNumber(Math.max(page-1,0))}>Previous</button>
      <button className='btn btn-blue pagebtn' onClick={()=>handlePageNumber(Math.max(page+1,0))}>Next</button>
     </div>
    </div>
  )
}
export default Dashboard