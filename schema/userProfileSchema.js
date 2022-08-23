const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    name :{
        type : String
    },
    photo:{
        type : String
    },
    email:{
        type : String
    },
    phoneNumber:{
        type : String
    },
    password:{
        type : String
    },
    activityLogIds:{
        type : [String]
    },
    favouriteRecipeListArray :{
        type : [String]
    },
    followingChefsArray : {
        type : [String]
    },
    notifications:{
        type : [String]
    },
    isPremium:{
        type : Boolean
    },
    creditCardNo:{
        type : String
    },
    masterCardNo:{
        type: String
    },
    myRecipeArray:{
        type : [String]
    },
    totalSubscribers : {
        type : Number
    }
})

module.exports = mongoose.model('Ingradients', userProfileSchema);