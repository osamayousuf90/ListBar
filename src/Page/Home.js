import React, { useState, useRef } from 'react';
import obj from "../API";
import { useNavigate } from "react-router-dom"

const Home = () => {
  // const [searchVal, setSearchVal] = useState("");
  // const [arr, setArr] = useState([obj])
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);  
  
  // const navigate = useNavigate();
    
    // useEffect(() => {
    //   const data = obj;
    //   const s = searchVal ? arr.filter((res) => res?.name.toLowerCase().includes(searchVal.toLowerCase())) : data;
    //   setArr(s)
    // }, [searchVal])
  
    function handleChange(event) {
      const value = event.target.value;
      if (value.length > 3) {
        setInputValue(parseFloat(value).toFixed(2));
      } else {
        setInputValue(value);
      }
  }
  

  function handleKeyDown(event) {
    if (event.key === 'Backspace') {
      const words = inputRef.current.value.split(' ');
      words.pop();
      setInputValue(words.join(' '));
    }
  }


 const isDecimalKey = (e) => {
   if (e.charCode == 46 || e.charCode === 0 || /\d/.test(String.fromCharCode(e.charCode))) {
      console.log("is number");
    	return true
   } else {
     console.log("not number")
    	e.preventDefault();
    }
}
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
        <div className="grid-container_item"> <h5>Hello This is Porter</h5> <img src="https://statinfer.com/wp-content/uploads/dummy-user.png" /> </div> 
        
        <input
        required name="balance" min="0" value={inputValue} step="any"
        ref={inputRef}
        type="text"
        // onChange={(event) => handleChange(event)}
        onChange={(e) => isDecimalKey(e)}
        placeholder='Place Values' />
        
      </div>
     </div>
  )
}

export default Home