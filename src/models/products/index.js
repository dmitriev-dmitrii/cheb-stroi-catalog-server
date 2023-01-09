const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    img: {
        type: String,
        required: false,
    },
    price: {
        type: String,
        required: false,
    },

    brand: {
        type: String,
        required: false,
    },

    category: {
        type: String,
        required: false,
    },

    count: {
        type: String,
        required: false,
    },


});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
