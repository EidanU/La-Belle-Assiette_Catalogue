// This is the URI to connect the app to mongo database
const dbURI = '';
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
// findByIdAndUpdate is depreciate if we don't put useFindAndModify to false
mongoose.set('useFindAndModify', false);

app.get('/api', (req, res) => {
    Food.find()
        .then((result) => { res.send(result) })
        .catch((error) => { res.send(error) });
});

app.post('/api/post', (req, res) => {
    const food = new Food(req.body);
    food.save()
        .then((result) => { res.send(result) })
        .catch((error) => { res.send(error) });
});

app.put('/api/put', (req, res) => {
    Food.findByIdAndUpdate({ _id: req.body.id }, req.body.update)
        .then((result) => { res.send(result) })
        .catch((error) => { res.send(error) });
});

app.delete('/api/delete', (req, res) => {
    Food.deleteOne({ _id: req.body })
        .then((result) => { res.send(result) })
        .catch((error) => { res.send(error) });
});



