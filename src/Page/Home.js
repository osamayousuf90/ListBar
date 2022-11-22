import React from 'react'
import { useEffect, useState } from 'react';
import obj from "../API";
import { useNavigate } from "react-router-dom"

const Home = () => {
  // const [searchVal, setSearchVal] = useState("");
  // const [arr, setArr] = useState([obj])
  
  // const navigate = useNavigate();
    
    // useEffect(() => {
    //   const data = obj;
    //   const s = searchVal ? arr.filter((res) => res?.name.toLowerCase().includes(searchVal.toLowerCase())) : data;
    //   setArr(s)
    // }, [searchVal])
  return (
    <div>
      {/* <div className="container main">
        <div className="main_searchBar">
        <input type="text" placeholder='Search' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} /> 
        </div>
      {arr.map((res) => {
        return (
          <div className="main_list">  
            <div onClick={() => navigate(`/profile/?userId=${res?.id}`,{state:res})} className='main_option'>{res?.name} <img src={res?.img}/></div>
          </div>
        )
      })}
      </div> */}
      <div className="navbar-container">
        <div className="navbar-container_logo">
          <img src="https://statinfer.com/wp-content/uploads/dummy-user.png" alt="" />
        </div>
        <div className="navbar-container_link">
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>

          <img src="https://image.similarpng.com/very-thumbnail/2021/06/Cross-mark-icon-in-red-color-on-transparent-background-PNG.png"/>
        </div>

   
        
      </div>
      <div className="grid-container">
        <div className="grid-container_item"> <h5>Hello This is Porter</h5> <img src="https://statinfer.com/wp-content/uploads/dummy-user.png"/> </div>
        <div className="grid-container_item"> <h5>Hello This is Porter</h5> <img src="https://statinfer.com/wp-content/uploads/dummy-user.png"/> </div>
        <div className="grid-container_item"> <h5>Hello This is Porter</h5> <img src="https://statinfer.com/wp-content/uploads/dummy-user.png"/> </div>
        <div className="grid-container_item"> <h5>Hello This is Porter</h5> <img src="https://statinfer.com/wp-content/uploads/dummy-user.png"/> </div> 
      </div>
     </div>
  )
}

export default Home