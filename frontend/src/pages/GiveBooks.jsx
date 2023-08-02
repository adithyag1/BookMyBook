import axios from 'axios';
import React, { useState, useEffect } from 'react';
import genres from '../config/genres';
import {useNavigate} from 'react-router-dom'
import routes from '../config/routes.js'

function GiveBooks() {
  const [bookname, setBookname] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [edition, setEdition] = useState('');
  const [pages, setPages] = useState(0);
  const [language, setLanguage] = useState('');
  const [file,setFile] = useState(null);
  const [owner, setOwner] = useState('');
  const [genre, setGenre] = useState([]);
  const [review, setReview] = useState('');
  const [description, setDescription] = useState('');
  const navigate= useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentuser'));
    setOwner(user._id);
  }, []);

  const handleCheckboxChange = (event) => {
    const genreValue = parseInt(event.target.value);
    if (genre.includes(genreValue)) {
      setGenre(genre.filter((genre) => genre !== genreValue));
    } else {
      setGenre([...genre, genreValue]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();if (!file) {
      alert('Please select a file.');
      return;
    }
    const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = async () => {
    const arrayBuffer = reader.result;
    const uint8Array = new Uint8Array(arrayBuffer);
    const newBook = {
      bookname,
      author,
      publisher,
      edition,
      pages: parseInt(pages),
      language,
      file: uint8Array,
      genre,
      review,
      description,
      owner,
    };
    const response = await axios.post(
      'http://localhost:3001/book/givebook',
      newBook
    );
    console.log('response', response.data.status);

    if(response.data.status ===1){
      alert('Succesfully posted!')
      navigate(routes.GIVENBOOKS);
    }
    else{
      console.log(response.data.message)
      alert('Failed to post your book :(');
    }
  }
  };
  return (
    <>
      <form>
        <input
          type='text'
          name='bookname'
          required
          placeholder='bookname'
          onChange={(e) => setBookname(e.target.value)}
        />
        <input
          type='text'
          name='author'
          required
          placeholder='author'
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type='text'
          name='publisher'
          required
          placeholder='publisher'
          onChange={(e) => setPublisher(e.target.value)}
        />
        <input
          type='text'
          name='edition'
          required
          placeholder='edition'
          onChange={(e) => setEdition(e.target.value)}
        />
        <input
          type='number'
          name='pages'
          required
          placeholder='pages'
          onChange={(e) => setPages(e.target.value)}
        />
        <input
          type='text'
          name='language'
          required
          placeholder='language'
          onChange={(e) => setLanguage(e.target.value)}
        />
        <input
          type='file'
          name='file'
          required
          accept='.pdf, .epub, .mobi'
          onChange={(e)=> setFile(e.target.files[0])}
        />
        <label>
          Genre:
          {Object.entries(genres).map(([genreValue, genreLabel]) => (
            <div key={genreValue}>
              <input
                type='checkbox'
                onChange={handleCheckboxChange}
                value={genreValue}
              />
              <label>{genreLabel}</label>
            </div>
          ))}
        </label>
        <input
          type='text'
          name='review'
          required
          placeholder='review'
          onChange={(e) => setReview(e.target.value)}
        />
        <input
          type='text'
          name='description'
          required
          placeholder='description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type='submit' onClick={(e) => handleSubmit(e)} />
      </form>
    </>
  );
}

export default GiveBooks;
