import mongoose, { Mongoose } from "mongoose";

const BookSchema = new Mongoose.Schema({
    bookname:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    edition:{
        type: String,
        required: true
    },
    points:{
        type: Number,
        required: true
    },
    coverpage:{
        type: String,
        required: true
    },
    owner:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    },
    passes:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
});