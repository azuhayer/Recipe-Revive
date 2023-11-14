# Recipe Revive

## Step 1: High-level Component Diagram

The web client makes a request to the local host and starts the app server. Then we have requests to firebase for user authentication and requests to our recipe API.

## Step 2: Entity Diagram

We have a user table. If the user wants to create a new recipe, the data gets sent to the create recipe table and user recipe to store the recipe info in the recipe table. The search query handles searching, which leads to the recipe table. When you save the recipe, it goes to the saved recipe table and the user is able to access it too.

## Step 3: Flow Diagram

For the flow diagram, we have the user arriving at the home page. They click the log in button to go to the login page. If the user is existing user, then they can submit email and password to log in through firebase and would be returned to home. Otherwise the user will click a button to go to the sign up page and submit details to make an account. After the submission goes through, they will be logged in and returned to home.