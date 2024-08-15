import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'

import mealFoto from "../../assets/meal.svg"
import { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const{name,password,setName,setPassword}=useContext(RecipeContext)

const navigate=useNavigate()

const handleSubmit=(e)=>{
e.preventDefault()

localStorage.setItem("username",name)
localStorage.setItem("password",password)

navigate("/home")

}

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealFoto} />

        <Header> {"<Clarusway/>"} recipe </Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login