import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/AuthenticationProvider'

const HomePage = () => {

  const { user } = React.useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    if(!user || !user.isLoggedIn) {
        navigate("/auth/login")
    } 
  }, [user, navigate])

  

  return (
    <div>HomePage</div>
  )
}

export default HomePage