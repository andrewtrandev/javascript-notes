import React, {useEffect, useState} from 'react'
import axios from 'axios'
/* how can we get books?
we're running a rails backend server on port 4000, so we can use axios or fetch to link up to that and grab data from there 
*/

const ViewBook = (props) => {
    // console.log(props);
    
    const [book, setBook] = useState([])


// using the useEffect as a componentDidMount, gets called as soon as ViewBooks is rendered
///use axios to get the books and set the book value using setBooks(res.data)
    useEffect(() => {
        axios.get(`http://localhost:4000/books/${props.bookId}`)
        .then(res =>{
            setBook(res.data)
        })
    }, [])


    // console.log(book);
    
    function renderBook() {
        return (
            <>
                {book.title} - {book.author}
            </>
        )
    }

    return (
        renderBook()
    )
}

export default ViewBook