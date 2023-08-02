import {Router} from 'express';
import BookModel from '../models/Books.js';
import UserModel from '../models/Users.js';

const router= Router();

router.post('/givebook', async(req,res)=>{
    try{
        //part 1
        const newBook=new BookModel(req.body);
        await newBook.save();
        //part 2
        const user= await UserModel.findById(newBook.owner)
        user.givenBooks.push(newBook._id);
        await user.save();
        if(newBook && user){
            res.json({status: 1})
        }
        else{
            if(!newBook){
            res.json({status: 0, message:"newBook false"});
            }
            if(!user){
                res.json({status: 0, message:"user false"});
                }
        }
        
        
    }
    catch(error){
        res.json({message: error});
    }
});
router.post('/mygivenbooks', async(req, res)=>{
    const {userId}= req.body;
    const user= await UserModel.findById(userId);
    const bookIds= user?.givenBooks;
    const books=[];
    for(let i=0; i<bookIds.length; i++){
        const book= await BookModel.findById(bookIds[i]._id);
        books.push(book);
    }
    if(bookIds && bookIds.length>0 && books.length>0){
        res.json({status: 1, books:books});
    }
    else{
        res.json({status: 0, message: 'no books given yet!'});
    }
})
// router.post('/getsinglebook',async(req,res)=>{
//     const {bookId}= req.body;
//     const book= await BookModel.findById(bookId);
//     if(book){
//         res.json({status:1, book: book});
//     }
//     else
//     {
//         res.json({status: 0, message: 'no book found!'});
//     }
// })

router.post('/getbook', async (req, res) => {
    const { selected, sendData } = req.body;
    let books;
  
    if (selected === 'bookname') {
      books = await BookModel.find({ bookname: sendData });
    }
    else if (selected === 'author') {
      books = await BookModel.find({ author: sendData });
    }
    else if (selected === 'genre') {
      const genre = sendData;
      books = await BookModel.find({ genre: { $in: genre } });
    }
  
    res.json({ books });
  });  

export {router as bookRouter};