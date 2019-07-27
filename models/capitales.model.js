const mongoose = require('mongoose');

let capitalSchema = new mongoose.Schema({
        pais: {
            required: true,
            type: String
        },
        capital:{
            required: true,
            type: String
        }
});  

const capitalesModel = mongoose.model('Capital', capitalSchema, 'capitales');
module.exports  = capitalesModel;