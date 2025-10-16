import React,{createContext} from "react";
import { useState } from "react";
import { recipesData } from "../data";

export const FoodContext = createContext();

const FoodContextProvider = ({children}) => {
    const [recipes, setRecipes] = useState(recipesData)
    const [filteredRecipes, setFilteredrecipes] = useState(recipesData)

    const searchIngredients = (search) => {
      if(search === "") {
        setFilteredrecipes(recipes)
      }else {
        const filtered = recipes.filter((recipe)=> {
          return recipe.title.toLowerCase().includes(search.toLowerCase())
        })
        setFilteredrecipes(filtered)
      }
    }
    

    return (
        <FoodContext.Provider value ={{recipes, searchIngredients,filteredRecipes}}>
          {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider