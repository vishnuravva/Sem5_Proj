const mongoose = require('mongoose')
const { Schema } = mongoose

const GoogleUserSchema = new Schema({
    googleId:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
})

const GoogleUser = mongoose.model("googleprofiles",GoogleUserSchema)
module.exports = GoogleUser