import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
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
    pages:{
        type: Number,
        required: true
    },
    points:{
        type: Number,
        required: true
    },
    language:{
        type: String,
        required: true
    },
    coverBack: {
        type: String,
        required: true
    },
    coverpageImg:{
        type: String,
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status:{
        type: Number,
        required: true
    },
    passes:{
        type: Number,
        required: true
    },
    genre: [{
        type: Number,
        required: true
    }],
    review: {
        type: Number,
        require: true
    },
    description:{
        type: String,
        required: true
    },
});

const BookModel= mongoose.model("books",BookSchema);
export default BookModel;