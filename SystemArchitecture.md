# Recipe Revive
## By Nikhil

## High Level Component Diagram
![High-LevelComponentDiagram](https://github.com/NikhilPrajith/Recipe-Revive/assets/57269214/b2745d26-c417-4c27-af35-772763cd1657)
**Web Client**: This represents the user interface or front end from where users interact with the system.

**Web Server (localhost)**: This is the local server for development purposes, which handles requests from the web client. It communicates with the web client and serves files, by processing HTTP and/or JSON Requests

**App Server (next.js)**: This server is built with Next.js, a React framework that enables server-side rendering and generation of web pages. The app server communicates with the web server via HTTP and with a protocol.

**Database Server (Firebase)**: Firebase provides a real-time database and backend as a service. The app server communicates with the database server over HTTPS using BSON, a binary representation of JSON-like documents.

**Local Storage (browser)**: The storage mechanism provided by the browser where data can be stored locally within the user's browser. The app server also communicates with this local storage, for cahing guest user saved recipes and for caching user-specific information for faster login and processing.

## Entity Diagram
![ER_Diagram](https://github.com/NikhilPrajith/Recipe-Revive/assets/57269214/f12c3763-5238-4c5a-aad5-98c3483198d3)
**Description:**
The entity relation diagram outlines the database structure and the relationships between the entities of our application.

_Users Entity_: Stores user information such as name, password, list of favorite recipes, etc and a unique identifier
_Recipes_: Entity for recipe details such as description, rating, etc and a unqiue recipie id.
_Saved Recipes_: Junction table that has a many to many relationship between Users and Recipes. Links user_id and recipe_id both as foreign keys.
_Ingredients_: This entity holds ingredient details such as name identifier, with a relationship to recipe described below.
_Reviews_: This enitity is for user reviews of recipes and for a user, with fields for userid, recipeid, etc.

**Relationships**:
Users can have multiple Saved Recipes and Reviews, as a ont to many relationship

Recipes can have multiple ingredients and Reviews, also showing one to many relationship. 

The ingredients entity is related to Recipes, indicating a one to many, each recipe can contain multiple ingredients.


## Flow Diagram
![FlowDiagram](https://github.com/NikhilPrajith/Recipe-Revive/assets/57269214/8d52334d-5a56-4243-bcb6-727cb20f02ee)

**Description**
This shows the flow of searching for a recipe and performing particular actions with a recipe result.
The user begins at the **Home page**, then searches for a term which runs the "search recipe" action, which
leads to the **Explore page**. On the explore page, users can perform actions such as "filter" recipes which filters
the recipes and displays it on the explore page. They can "save/like" the recipes which will save the recipe to **firebase**. 
From the explore page the users can "view details" which leads to the **Recipe Details** page and shows the detaisl of the recipe.
In addittion, from the explore page they can "view saved recipe" which leads to the **User Profile** page and shows the recipes saved by the user

