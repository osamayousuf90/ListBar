import React from 'react'
import { useEffect, useState } from 'react';
import obj from "../API";
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [searchVal, setSearchVal] = useState("");
  const [arr, setArr] = useState([obj])
  
  const navigate = useNavigate();
    
    useEffect(() => {
      const data = obj;
      const s = searchVal ? arr.filter((res) => res?.name.toLowerCase().includes(searchVal.toLowerCase())) : data;
      setArr(s)
    }, [searchVal])
  return (
    <div>
      <div className="container main">
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
      </div>
     </div>
  )
}

export default Home