// This is the URI to the connect the app to mongo database
const dbURI = 'mongodb+srv://root:Password123@nodemongo.uxrh4.mongodb.net/Cook_inventory?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const Food = require('./models/food');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();

//Here I use bodyParse because when I make a request I cannot read the body / I use cors() too, to override cors policies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());

//Here I need to be connected to my database, if the connexion succeed, The backend api will be hosted on a local server listen change on port 3001
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port))
    .catch((error) => console.log(error));

// Here I use the express method .all() witch on i can make many request on a same endpoint
app.all('/api/', (req, res) => {
    if (req.method === 'GET') {
        Food.find()
            .then((result) => { res.send(result) }).
            catch((error) => { res.send(error) });
    }
    else if (req.method === 'POST') {
        //Here I need to create a new instance of the model, to add new data to my collection in my database
        const food = new Food(req.body);
        food.save()
            .then((result) => {
                res.send(result);
            }).catch((err) => {
                console.log(err.message);
            })
    }
    else if (req.method === 'PUT') {
        //Here I use a mongoose method 'findByIdAndUpdate()' to map my collection and find one item that match with the id in the requests
        Food.findByIdAndUpdate({ _id: req.body.id }, req.body.update)
            .then((res) => console.log('result : ', res))
            .catch((err) => console.log('error  :', err.message));
    }
    else if (req.method === 'DELETE') {
        //Here I use a mongoose method  'deleteOne()' to map my collection and delete one item that match request body
        Food.deleteOne({ _id: req.body })
            .then((res) => console.log('result : ', res))
            .catch((err) => console.log('error : ', err.message));
    }
    else {
        res.send('It didn\'t work');
    }
});

