import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CardList from './CardList'



const ListUsers=()=> {

const[users,setUsers]=useState([{}])

useEffect(()=>{  
   const fetchData=()=>{ 
        axios.get("https://jsonplaceholder.typicode.com/users") 
        .then(res=>setUsers(res.data))  
           .catch(err=>console.log(err))   
           }  
 fetchData()  
},[])

  return (
  <div className="cards">
{users.map((user,i)=><CardList user={user} key={i} />)}
  </div>
    
    
  );

  }
export default ListUsers;