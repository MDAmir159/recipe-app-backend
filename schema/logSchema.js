const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    description :{
        type : String
    },
    actionAuthorID:{
        type : String
    },
    time:{
        type : Date
    }
})

module.exports = mongoose.model('Ingradients', logSchema);
module.exports = {
    logSchema
}