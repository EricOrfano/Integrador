const mongoose = require('mongoose');
const {Schema, model} = require("mongoose")
const userSchema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, trim: true},
    password: {type: String, required: true},
},
{timestamps: true} //createdAt, updateAt
);

const User = model("User",  userSchema)
module.expert = User 