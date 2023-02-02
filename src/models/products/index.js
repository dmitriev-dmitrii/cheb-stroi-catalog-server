import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    // _id: {

    //         type: String,

     
    // },
    name: {
        type: String,
        required: true,
    },
    // description: {
    //     type: String,
    //     required: false,
    // },
    // img: {
    //     type: String,
    //     required: false,
    // },
    // price: {
    //     type: String,
    //     required: false,
    // },

    // brand: {
    //     type: String,
    //     required: false,
    // },

    // category: {
    //     type: String,
    //     required: false,
    // },

    // count: {
    //     type: String,
    //     required: false,
    // },


});

export default  mongoose.model('Product', productSchema);

