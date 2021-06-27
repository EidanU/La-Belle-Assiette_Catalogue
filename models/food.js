const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;