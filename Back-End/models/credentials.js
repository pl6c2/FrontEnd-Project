const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const credentialsSchema= new Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    userName:{
        type:String,
         required: [true,"UserName is required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "password is required"]
    }
})

const Credentials = mongoose.model('credential',credentialsSchema);
module.exports=Credentials;

