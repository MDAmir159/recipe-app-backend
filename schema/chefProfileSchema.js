const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    designation :{
        type : String
    },
    companyName : {
        type : String
    },
    fromDate:{
        type: Date
    },
    toDate:{
        type : Date
    }
})
const chefProfileSchema = new mongoose.Schema({
    name :{
        type : String
    },
    Photo :{
        type : String
    },
    noOfSubscribers :{
        type : Number
    },
    currentJob:{
        type : jobSchema
    },
    prevJob:{
        type : [jobSchema]
    },
    avgRating:{
        type : ongoose.Decimal128
    },
    about:{
        type : String
    }
})

module.exports = mongoose.model('Ingradients', chefProfileSchema);