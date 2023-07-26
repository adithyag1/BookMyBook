import {Router} from 'express';
import UserModel from '../models/Users.js';
import bcrypt from 'bcrypt';

const router= Router();

router.post('/register', async(req, res)=>{
    const {username, name, password, email, points}= req.body;
    try{
       const user= await UserModel.findOne({username});
       if(user)
       {
        return res.json({message: 'User already exists!'});
       }
       else{
        const hashedPassword= await bcrypt.hash(password,10);
        const newUser= new UserModel({username, name, password: hashedPassword, email, points});
        await newUser.save();
        res.json({message:' saved successfully!'});
       }

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