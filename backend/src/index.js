import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app= express();
dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://adithyag1:${process.env.MONGODB_PASSWORD}@bookmybook.dvtt2hr.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(3001, ()=>{
        console.log('server started.')
    })
}).catch((err)=>{
    console.log('Not connected to mongodb because- ', err);
})

