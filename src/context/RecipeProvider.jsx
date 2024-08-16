//!context alanı create edelim

import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const RecipeContext = createContext();

const APP_ID = "bfbb3efc";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const RecipeProvider = ({ children }) => {
  //! login ve privaterouter sayfalarında gerekli usestateleri açtık

  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );

  //! Home, header, recipecard da gerekli olan veriler

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getData = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(url);

      setRecipes(data.hits);

    } catch (error) {
      setError(true);
    }finally{
      setLoading(false);

    }
  };

if(error){
  return <p> Something Went Wrong....</p>
}

if(loading){
  return <p> LOADINGGGG.....</p>
}

  return (
    <RecipeContext.Provider
      value={{
        name,
        password,
        setName,
        setPassword,
        setQuery,
        setMealType,
        recipes,
        getData,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
