import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const CreateBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [isCreated, setIsCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  //axios post takes the url and data which is an object

  function createBook() {
    axios
      .post(`http://localhost:4000/books`, {
        book: {
          title: bookTitle,
          author: bookAuthor,
        },
      })
      .then(() => setIsCreated(true));
  }

  //on any user input change for the input fields, change the state to be the value of the inputfield
  return (
    <div>
      <input
        placeholder='Book Title'
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      />
      <input
        placeholder='Book Author'
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
      />
      <button onClick={createBook}>Create Book</button>
      {isCreated && <Redirect to='/' />}
      {/* if is created is true then short-circuit <Redirect to take us back to home> */}
    </div>
  );
};

export default CreateBook;
