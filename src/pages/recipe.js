import { graphql } from 'gatsby'
import React from 'react'
import { motion } from "framer-motion";
import Difficulty from '../components/difficulty';
import Ingredients from '../components/ingredients';
import Instructions from '../components/instructions';
import Preparation from '../components/preparation';
import Servings from '../components/servings';
import Summary from '../components/summary';
import Cooking from '../components/time';

const pageTemplate = props => {

  const data = {
     nodeFood:  props.pageContext.data
   }
 
   console.log(data);
 
 
   return (
      <Layout>
        <motion.h1
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          <Title>{data.nodeFood.title}</Title>
        </motion.h1>
        <Category>{ data.nodeFood.recipeCategory.name }</Category>
        <Tags>{data.nodeFood.tags.name}</Tags>
        <Summary>{ data.nodeFood.summary.value }</Summary>
        <img src={data.nodeFood.mediaImage.mediaImage.url}></img>
        <Preparation>{ data.nodeFood.preparationTime }</Preparation>
        <Cooking>{ data.nodeFood.cookingTime }</Cooking>
        <Servings>{ data.nodeFood.numberOfServings }</Servings>
        <Difficulty>{ data.nodeFood.difficulty }</Difficulty>
        <Ingredients>{ data.nodeFood.ingredients }</Ingredients>
        <Instructions>{ data.nodeFood.recipeInstruction.value }</Instructions>
      </Layout>
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