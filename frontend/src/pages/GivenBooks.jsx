import axios from "axios";
import React, { useEffect, useState } from "react";

function GivenBooks() {
  const user = JSON.parse(localStorage.getItem("currentuser"));
  const [books, setBooks] = useState([]);
  // const [bookDetails, setBookDetails]=useState();
  const [loading, setLoading]= useState(true);

  useEffect(() => {
    getBookList().then(()=>{
        setLoading(false);
    }).catch((err)=>{
        console.log('error: ',err);
        setLoading(false);
    });
  }, []);


  const getBookList = async () => {
    try{
        const response = await axios.post(
            "http://localhost:3001/book/mygivenbooks",
            { userId: user._id }
          );
          if (response.data.status) {
            console.log(response.data.books);
            setBooks(response.data.books);
          }
    }
    catch(err)
    {
        return err;
    }
    
  };

  // const getBook= async(bookId)=>{
  //   try{
  //       const response = await axios.post(
  //           "http://localhost:3001/book/getsinglebook",
  //           { bookId }
  //         );
  //         if (response.data.status) {
  //           console.log(response.data.book);
  //           setBooks(response.data.books);
  //         }
  //         else{
  //           console.log(response.data.message);
  //         }
  //   }
  //   catch(err)
  //   {
  //       return err;
  //   }
  // }
  return (
  <div>
    {
      !loading ? books.length>0? ( books.map((book, index)=>(
            <div key={index}>
                <div>{book.bookname}</div>
                <div>{book.status}</div>
               
            </div>
        ))):(<div>You have given no books</div>): (<div>Fetching your books...</div>)
    }
  </div>
  );
}

export default GivenBooks;
