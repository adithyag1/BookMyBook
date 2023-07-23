import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
  },
  points: {
    type: Number,
    required: true,
  },
  givenBooks: 
    [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books"
        }
    ],
    receivedBooks:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "books"
        }
    ]
});
