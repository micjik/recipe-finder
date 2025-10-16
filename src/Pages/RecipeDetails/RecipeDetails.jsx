import React from 'react'
import { recipesData } from '../../data'
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    

  //get recipe id
    const {id} = useParams();
 
    //get recipe based on id
    const recipe = recipesData.find(recipe => {
        return recipe.id === parseInt(id)
        
    })

  return (
    
    <>
      <div className="recipe-details">
        <div className="img-recipe">
            <img src={recipe.image} alt="" />
        </div>
         <h1>{recipe.title}</h1>
         <p>OverView: {recipe.overview}</p>
         <p>Servings: {recipe.servings}</p>
         <p>PrepMinutes: {recipe.prepMinutes}</p>
         <p>CookMinute: {recipe.CookMinutes}</p>
         <ul className="recipe-ingredients">
           <li>{recipe.ingredients}</li> 
         </ul>
         <div className="recipe-instruction">
            <p>{recipe.instructions}</p>
         </div>
          

      </div>
    </>
  )
}

export default RecipeDetails
