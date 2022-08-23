const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name :{
        type : String
    },
    ownerID:{
        type : String
    },
    chefsIDs:{
        type : [String]
    },
    photoArray :{
        type : [String]
    },
    location : {
        type : String
    },
    about:{
        type : String
    }
})

module.exports = mongoose.model('Ingradients', restaurantSchema);