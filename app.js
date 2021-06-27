const dbURI = 'mongodb+srv://root:Password123@nodemongo.uxrh4.mongodb.net/Cook_inventory?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const Food = require('./models/food');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port))
    .catch((error) => console.log(error));


app.all('/api/', (req, res) => {

    if (req.method === 'GET') {
        Food.find()
            .then((result) => { res.send(result) }).
            catch((error) => { res.send(error) });
    }
    else if (req.method === 'POST') {
        const food = new Food(req.body);
        food.save()
            .then((result) => {
                res.send(result);
            }).catch((err) => {
                console.log(err.message);
            })
    }
    else if (req.method === 'PUT') {

    }
    else if (req.method === 'DELETE') {
        Food.deleteOne({ _id: req.body })
            .then(() => console.log('yaaaaa'))
            .catch(() => console.log('pas ya'))
    }
    else {
        res.send('ayayaya ca n\'a pas marché')
    }
});

    // app.get('/api/add-food', (req, res) => {
    //     const food = new Food({
    //         name: 'carottes',
    //         quantity: 17
    //     });
    //     food.save()
    //         .then((result) => {
    //             res.send(result)
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // });

// app.get('/single-food', (req, res) => {
//     Food.findById('60d86c597c1ea442f8358edf')
//         .then((result) => { res.send(result) }).
//         catch((error) => { res.send(error) });
// });