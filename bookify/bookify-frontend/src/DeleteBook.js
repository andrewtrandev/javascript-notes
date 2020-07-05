import React from 'react'
import axios from 'axios'

const DeleteBook = ({bookId, onDelete}) => {

    function deleteBook() {
        axios.delete(`http://localhost:4000/books/${bookId}`)
        .then(onDelete)
}


    return (
        <button onClick={deleteBook}>X</button>
    )

}

export default DeleteBook