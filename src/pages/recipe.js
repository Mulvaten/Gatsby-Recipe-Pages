import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Recipe({ pageContext }) {
    const { recipe } = pageContext
    return (
      <div>
        <h1>{recipe.title}</h1>
        <h2>Category: {recipe.recipeCategory.name}</h2>
        <h2>Tags: {recipe.tags.name}</h2>
        <p>{recipe.summary.value}</p>
        <img src={recipe.mediaImage.mediaImage.url}></img>
        <h2>Preparation Time: {recipe.preparationTime}</h2>
        <h2>Cooking Time: {recipe.cookingTime}</h2>
        <h2>Number of Servings: {recipe.numberOfServings}</h2>
        <h2>Difficulty: {recipe.difficulty}</h2>
        <div>Ingredients: {recipe.ingredients}</div>
        <p>Instructions: {recipe.recipeInstruction.value}</p>
      </div>
    )
  }

export default Recipe