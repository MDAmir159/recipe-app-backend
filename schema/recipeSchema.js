const mongoose = require('mongoose');
const { tagsSchema } = require('./tagsSchema');

const ingradientsDetailsSchema = new mongoose.Schema({
    _id:{
        type : String
    },
    quantity : {
        type : Number
    },
    measuringParamId : {
        type : String
    }
})

const recipeSchema = new mongoose.Schema({
    name :{
        type : String
    },
    ratedBy :{
        type : Number
    },
    avgRating :{
        type : mongoose.Decimal128
    },
    photoArray :{
        type : [String]
    },
    ingradientsWithQuantity :{
        type : [ingradientsDetailsSchema]
    },
    date :{
        type : Date
    },
    cousine :{
        type : String
    },
    cooksId :{
        type : String
    },
    tags :{
        type : [tagsSchema]
    },
    categoryId :{
        type : String
    },
    energyInCalory:{
        type : mongoose.Decimal128
    }
})

module.exports = mongoose.model('Ingradients', recipeSchema);