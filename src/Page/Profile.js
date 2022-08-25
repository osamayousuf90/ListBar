import React from 'react'
import {useLocation} from 'react-router-dom'


const Profile = (props) => {

  const location = useLocation()

  return (
    <div className="profile">
      <img src={location?.state.img} />
      <h5>{location?.state.name}</h5>    
    </div>
  )
}

export default Profile