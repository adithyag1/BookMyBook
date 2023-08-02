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
    language:{
        type: String,
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    file:{
        type: Buffer,
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