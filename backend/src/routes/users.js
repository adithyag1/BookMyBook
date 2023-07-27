import {Router} from 'express';
import UserModel from '../models/Users.js';
import bcrypt from 'bcrypt';

const router= Router();

router.post('/register', async(req, res)=>{
    const {username, name, password, email}= req.body;
    try{
       const findByUsername= await UserModel.findOne({username});
       const findByEmail=await UserModel.findOne({email});
       if(!findByUsername&&!findByEmail){
        const hashedPassword= await bcrypt.hash(password,10);
        const newUser= new UserModel({username, name, password: hashedPassword, email, points: 100, givenBooks:[],receivedBooks:[]});
        await newUser.save();
        res.json({status: 0, message:' saved successfully!'});
       }
       else if(findByUsername)
        return res.json({status: 1, message: 'Username already exists!'});
    else if(findByEmail)
        return res.json({status: 2, message: 'Email already exists!'});

    }
    catch(err){
        res.json({message: err});
    }

});

router.post('/login', async(req, res)=>{
    const {username, password}= req.body;
    try{
       const user= await UserModel.findOne({username});
       if(user)
       {
            const passwordMatch= await bcrypt.compare(password, user.password)
            if(passwordMatch){
                res.json({status:1, user: user });
            }
            else{
                res.json({status:0, message:' password wrong!'})
            }
       }
       else{
        res.json({status:2, message:' user not registered!'});
       }

    }
    catch(err){
        res.json({message: err});
    }
});

export {router as userRouter};