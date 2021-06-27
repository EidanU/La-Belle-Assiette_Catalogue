const dbURI = 'mongodb+srv://root:Password123@nodemongo.uxrh4.mongodb.net/Cook_inventory?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const Food = require('./models/food');

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(port))
    .catch((error) => console.log(error));

app.get('/add-food', (req, res) => {
    const food = new Food({
        name: 'carottes',
        quantity: 17
    });
    food.save()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err)
        })
});


app.get('/all-food', (req, res) => {
    Food.find()
        .then((result) => { res.send(result) }).
        catch((error) => { res.send(error) });
});
app.get('/single-food', (req, res) => {
    Food.findById('60d86c597c1ea442f8358edf')
        .then((result) => { res.send(result) }).
        catch((error) => { res.send(error) });
});