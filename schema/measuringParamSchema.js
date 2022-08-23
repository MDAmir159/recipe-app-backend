const mongoose = require('mongoose')

const measuringParamSchema = new mongoose.Schema({
    name :{
        type : String
    }
})

module.exports = mongoose.model('Ingradients', measuringParamSchema);