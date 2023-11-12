# Recipe Revive Architecture

This document describes the overall architecture of the Recipe Revive Application. 

## High-level Component Diagram

![High-level Component Diagram](Recipe_Revive_High-Level_Component_Diagram.png)

In the depicted component diagram, the system comprises several key components. The web client, represented as a rectangle, interacts with the local web server (localhost) using the HTTPS/JSON protocol, ensuring secure data transmission. The web server, in turn, communicates with the app server (Node.js) via HTTP/JSON. This interaction represents the flow of data and requests between the frontend and backend components of the application. The app server, a crucial executable program, connects to the Edamam API with the HTTPS/JSON protocol, ensuring secure and encrypted communication for retrieving recipe-related data. Additionally, the app server communicates with the database server (Firebase) using the HTTPS/JSON protocol, ensuring secure exchanges for storing and retrieving data. 