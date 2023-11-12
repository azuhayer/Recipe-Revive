## High Level Component Diagram 

![Component Diagram] (https://github.com/azuhayer/Recipe-Revive/blob/zuhayer-session9-assignment/ComponentDiagram.png)

Localhost (Web Server):
Description: The localhost component represents the web server that serves static files (HTML, CSS, JavaScript) to the client's browser.
Responsibilities:
Hosts and serves static files for the web application.
Manages incoming HTTP requests from clients.

Node.js (App Server):
Description: Node.js is a server-side JavaScript runtime used to execute server-side code for your web application.
Responsibilities:
Executes server-side application logic and handles dynamic content generation.
Manages the communication between the client-side (browser) and the server-side.

Edamam (API Server):
Description: Edamam serves as the API server in your architecture, providing functionality related to retrieving and managing data related to food and nutrition.
Responsibilities:
Exposes API endpoints that your application can call to retrieve information about food and nutrition from Edamam's services.
Handles requests from your Node.js application and returns relevant data.

Firebase (Database Server):
Description: Firebase serves as the database server, storing and managing the persistent data for your web application.
Responsibilities:
Stores and retrieves data necessary for your application, such as user information, preferences, or any other relevant data.
Provides a secure and scalable way to manage your application's data.

Interactions:
The browser sends requests to the localhost web server for static resources (HTML, CSS, JavaScript).
Node.js app server handles dynamic content generation and communicates with Edamam API server to fetch food and nutrition-related data when needed.
Node.js app server also interacts with Firebase to store and retrieve application data.
Edamam API server communicates with Node.js to respond to requests for food and nutrition data.


## Relationship Diagram 

![Relationship Diagram] (https://github.com/azuhayer/Recipe-Revive/blob/zuhayer-session9-assignment/RelationshipDiagram.png)

In the relationship diagram, the entities exhibit various associations, reflecting the key interactions within the context of our Recipe-Revive application. A "User" entity is at the core, establishing relationships with other entities such as "savedRecipe" and "createdRecipe" as well as "Recipe". A "User" can save multiple recipes and create numerous recipes. The "savedRecipe" entitiy has a relationship with the "Recipe" entity, indicating that it represents instances of recipes. Additionally, the "recipeForm" entity is associated with the "createdRecipe" entity, meaning that it serves as a form or template for users to input details when creating a recipe. The "searchRecipe" entity is linked to "Recipe," implying it is involved in the process of searching and retrieving existing recipes. Finally, the "Filter" entity is associated with "searchRecipe," suggesting its role in refining and narrowing down search results based on specific criteria. Overall, this relationship diagram outlines the connections between users, recipes, forms, and search functionalities within the application.


## Flow Diagram 

![Flow Diagram] (https://github.com/azuhayer/Recipe-Revive/blob/zuhayer-session9-assignment/FlowDiagram.png)

The flow diagram for user login/signup authentication outlines the sequential steps involved in the process of authenticating users within the Recipe-Revive application. 
Initially the flow begins with the user being greeted to the home page, where they have the option to login/signup to the application. Upon clicking that button the User
will be directed to the login/signup page. if the user is an existing user of our application, they will login like normal, if they aren't an existing user, they will 
click the sign up link and submit new email address and password. This will store the data into the Firebase database we have implemented. The user will then be directed 
back to the home page. 
