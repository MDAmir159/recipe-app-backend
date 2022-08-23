const mongoose = require('mongoose')

const tagsSchema = new mongoose.Schema({
    name :{
        type : String
    }
})

module.exports = mongoose.model('Ingradients', tagsSchema);
module.exports = {
    tagsSchema
}