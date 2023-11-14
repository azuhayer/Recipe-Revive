# Recipe Revive

## Step 1: High-level Component Diagram

![image](https://github.com/riazahmed01/Recipe-Revive/assets/50673480/38b37bc9-b0ef-4a1f-b51e-a1f1d2cb252f)

The web client makes a request to the local host and starts the app server. Then we have requests to firebase for user authentication and requests to our recipe API.

## Step 2: Entity Diagram

![image](https://github.com/riazahmed01/Recipe-Revive/assets/50673480/f9ed59f7-6094-48f2-8739-ff22f2d29851)

We have a user table. If the user wants to create a new recipe, the data gets sent to the create recipe table and user recipe to store the recipe info in the recipe table. The search query handles searching, which leads to the recipe table. When you save the recipe, it goes to the saved recipe table and the user is able to access it too.

## Step 3: Flow Diagram

![image](https://github.com/riazahmed01/Recipe-Revive/assets/50673480/248dea7d-e8cf-43d1-b410-1096dd10377e)

For the flow diagram, we have the user arriving at the home page. They click the log in button to go to the login page. If the user is existing user, then they can submit email and password to log in through firebase and would be returned to home. Otherwise the user will click a button to go to the sign up page and submit details to make an account. After the submission goes through, they will be logged in and returned to home.
