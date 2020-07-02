import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DeleteBook from './DeleteBook'
/* how can we get books?
we're running a rails backend server on port 4000, so we can use axios or fetch to link up to that and grab data from there 
*/

const ViewBooks = () => {

    const [books, setBooks] = useState([])

// using the useEffect as a componentDidMount, gets called as soon as ViewBooks is rendered
///use axios to get the books and set the book value using setBooks(res.data)
    useEffect(() => {
        axios.get(`http://localhost:4000/books`)
        .then(res =>{
            setBooks(res.data)
        })
    }, [])

    // console.log(books);
    
    function renderBooks(){
        return (
            <>
            {books.map((book, index) => (
                <li key={book.id}>
                {book.title} - {book.author} - <Link to={`/${book.id}`}>View</Link>
                <DeleteBook
                    bookId = {book.id}
                    onDelete = {() => setBooks(books.filter( (b, i) => b.id !== book.id))}
                    />
                </li>
            ))}
        </>
        )
    }

    return (
        renderBooks()
    )
}

export default ViewBooks