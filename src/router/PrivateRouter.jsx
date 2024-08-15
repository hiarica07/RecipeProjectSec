import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

    const {name,password}=useContext(RecipeContext)

  return (
    name==="halil" && password==="4593" ? <Outlet/> : <Navigate to="/"/>   // OUTLET NAVIGATE PRIVATEROOTERA AIT
) 
    
  
}

export default PrivateRouter
