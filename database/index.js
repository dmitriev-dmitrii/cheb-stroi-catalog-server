const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

module.exports =  async function (databaseURL = '') {
    try {
        await mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
    }
    catch (err) {
        return err

    }

}