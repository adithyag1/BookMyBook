import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { userRouter } from './routes/users.js';
import { bookRouter } from './routes/books.js';

const app= express();
app.use(bodyParser.json({ limit: '25mb' }));
app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
dotenv.config();
app.use(express.json());
app.use(cors());
app.use('/auth',userRouter);
app.use('/book', bookRouter);

mongoose.connect(`mongodb+srv://adithyag1:${process.env.MONGODB_PASSWORD}@bookmybook.dvtt2hr.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(3001, ()=>{
        console.log('server started.')
    })
}).catch((err)=>{
    console.log('Not connected to mongodb because ', err);
})

