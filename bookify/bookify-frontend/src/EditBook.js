import React from 'react';
import axios from 'axios';

const EditBook = () => {
  function editBook() {
    // axios.patch(`http:localhost:4000/books/${bookId}`)
  }

  return <button onClick={editBook}>Edit</button>;
};

export default EditBook;
