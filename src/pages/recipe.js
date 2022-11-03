import { graphql } from 'gatsby'
import React from 'react'

const pageTemplate = props => {

  const data = {
     nodeFood:  props.pageContext.data
   }
 
   console.log(data);
 
 
   return (
      <div>
        <h2>{data.nodeFood.title}</h2>
        <h2>Category: {data.nodeFood.recipeCategory.name}</h2>
        <h2>Tags: {data.nodeFood.tags.name}</h2>
        <p>{data.nodeFood.summary.value}</p>
        <img src={data.nodeFood.mediaImage.mediaImage.url}></img>
        <h2>Preparation Time: {data.nodeFood.preparationTime}</h2>
        <h2>Cooking Time: {data.nodeFood.cookingTime}</h2>
        <h2>Number of Servings: {data.nodeFood.numberOfServings}</h2>
        <h2>Difficulty: {data.nodeFood.difficulty}</h2>
        <div>Ingredients: {data.nodeFood.ingredients}</div>
        <p>Instructions: {data.nodeFood.recipeInstruction.value}</p>
      </div>
     )}
 
 
 export default pageTemplate 
 /*
 export const query = graphql`
 query MyQuery($nid: string) {
   Drupal {
        nodeRecipe(id: { eq: $nid } ) {
                   changed
                   id
                   cookingTime
                   created
                   path
                   status
                   title
           }
   }
 }
 `
 */