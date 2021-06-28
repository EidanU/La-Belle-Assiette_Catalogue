# Chef Loic App

In this app you will be able to handle the chef Loic food inventory.
You can watch, add, modify and delete all the data from this single page.
I read that it was not required to make web design but I add some boostrap class, I hope you will enjoy the result! 

## Stack

- React
  - useSate, useEffect, useForm
  - Axios
  - React-Icons
- Node
  - Express
  - Mongoose

## Operation

To install modules in the api and in the client you need to run this script :

- npm run init

Before lauching the application you will need to go to the file ./app.js and add in the const dbURI : 

- mongodb+srv://root:Password123@nodemongo.uxrh4.mongodb.net/Cook_inventory?retryWrites=true&w=majority

After that, to launch the App you need to run this script (it will run server for client and api) :

- npm run all

After that juste go on this url :

- http://localhost:3000/


