const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Here I create a new schema for my collection foods every new data in my collection will respect this schema
const foodSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
}, { timestamps: true });

//Once the schema created, I create a model Food. This model allows me to use many methods to handle data so I export it to use it in my app
const Food = mongoose.model('Food', foodSchema);
module.exports = Food;