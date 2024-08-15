//!context alanı create edelim

import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export const RecipeContext=createContext()

const RecipeProvider=({children})=>{

//! login ve privaterouter sayfalarında gerekli usestateleri açtık

const[name,setName]=useState(localStorage.getItem("username") || "" )
const[password,setPassword]=useState(localStorage.getItem("password") ||"" )

// Home,header,recipecard da gerekli olan veriler.

const APP_ID = "3b0240bd"
const APP_KEY = "88ceed6f2912b5603c6bc9b0ad600212"

const [recipes,setRecipes] = useState([])
const [query,setQuery] = useState("")
const [mealType,setMealType] = useState("Breakfast")

const[loading,setLoading]=useState(false)
const[error,setError]=useState(false)

const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`; 

const getData=async()=>{
const {data} = await axios.get(url)

setRecipes(data.hits)

console.log(recipes);

}
// getData()

return(

  <RecipeContext.Provider value={{
    name,
    password,
    setName,
    setPassword,
    setQuery,
    setMealType,
    recipes,
    getData
  }}>

    {children}
  </RecipeContext.Provider>
)



}

export default RecipeProvider;