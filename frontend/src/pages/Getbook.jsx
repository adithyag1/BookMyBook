import axios from 'axios';
import React, { useState } from 'react'
import genres from '../config/genres';

function Getbook() {
  const [selected,setSelected]=useState('');
  const [keyword,setKeyword]=useState('bookname');
  const [genre,setGenre]=useState([]);
  const [gotresponse,setGotresponse]=useState(false);
  const [books,setBooks]=useState([]);

  const handleCheckboxChange = (event) => {
    const genreValue = parseInt(event.target.value);
    if (genre.includes(genreValue)) {
      setGenre(genre.filter((genre) => genre !== genreValue));
    } else {
      setGenre([...genre, genreValue]);
    }
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    let sendData;
    if(selected==='genre'){
      sendData=genre;
    }
    else{
      sendData=keyword;
    }
    console.log(sendData,"::")
    const response=await axios.post('http://localhost:3001/book/getbook',{selected,sendData});
    setGotresponse(true);
    setBooks(response.data.books);
    console.log("genre",genre,"books:)",books)
    
  }
  
  return (
    <div>
      <form>
        <label htmlFor='searchby'>Search By:</label>
        <select id='searchby' required onChange={(e)=>setSelected(e.target.value)}>
            <option value='bookname'>bookname</option>
            <option value='author'>author</option>
            <option value='genre'>genre</option>
        </select>
        {selected==='genre'?
        Object.entries(genres).map(([genreValue, genreLabel]) => (
            <div key={genreValue}>
              <input
                type='checkbox'
                onChange={handleCheckboxChange}
                value={genreValue}
              />
              <label>{genreLabel}</label>
            </div>
          ))
        :(<input type='text' required placeholder='Enter Keyword' onChange={(e)=>{setKeyword(e.target.value);}}></input>)}
        <input type='submit' onClick={(e)=>handleSubmit(e)}></input>
        {gotresponse?books.length>0? ( books.map((book, index)=>(
            <div key={index}>
                <div>{book.bookname}</div>
                <div>{book.status}</div>
               
            </div>
        ))):(<div>No Matches found!</div>):(<div>Getting Books</div>)}
        </form>
    </div>
  )
}

export default Getbook