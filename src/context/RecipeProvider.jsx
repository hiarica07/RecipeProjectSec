//!context alanı create edelim

import { useState } from "react";
import { createContext } from "react";

export const RecipeContext=createContext()

const RecipeProvider=({children})=>{

//! login ve privaterouter sayfalarında gerekli usestateleri açtık

const[name,setName]=useState(localStorage.getItem("username")|| "" )
const[password,setPassword]=useState(localStorage.getItem("password")||"" )


return(

  <RecipeContext.Provider value={{name,password,setName,setPassword}}>

    {children}
  </RecipeContext.Provider>
)



}

export default RecipeProvider;