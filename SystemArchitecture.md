# Recipe Revive Architecture

This document describes the overall architecture of the Recipe Revive Application. 

## High-level Component Diagram

![High-level Component Diagram](Recipe_Revive_High-Level_Component_Diagram.png)

In the depicted component diagram, the system comprises several key components. The web client, represented as a rectangle, interacts with the local web server (localhost) using the HTTPS/JSON protocol, ensuring secure data transmission. The web server, in turn, communicates with the app server (Node.js) via HTTP/JSON. This interaction represents the flow of data and requests between the frontend and backend components of the application. The app server, a crucial executable program, connects to the Edamam API with the HTTPS/JSON protocol, ensuring secure and encrypted communication for retrieving recipe-related data. Additionally, the app server communicates with the database server (Firebase) using the HTTPS/JSON protocol, ensuring secure exchanges for storing and retrieving data. 

## ER Diagram

![Relationship Diagram](Recipe_Revive_Entity_Diagram.png)

In the proposed entity relationship diagram, the system is structured around several key entities representing core aspects of a recipe-sharing application. The central entity, "User," encapsulates user-specific information such as userID, name, email, password, and user picture. This entity forms one-to-many relationships with "SavedRecipe", "CreatedRecipe" and "Recipe" indicating that a user can have multiple saved recipes, created recipes, and contributed recipes. The "Recipe" entity, in turn, establishes one-to-many relationships with "Instruction" and "RecipeIngredient," reflecting the comprehensive details associated with a recipe, including cooking instructions, nutritional information, and ingredient composition. Additionally, the "Recipe" entity fosters one-to-many relationships with "SavedRecipe" and "CreatedRecipe," highlighting that each recipe can be saved and created by multiple users. The "Unit" and "Ingredient" entities contribute to the system by defining units of measurement and individual ingredients, respectively, forming one-to-many relationships with the "RecipeIngredient" entity. 