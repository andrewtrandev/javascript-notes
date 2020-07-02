import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ViewSong = (props) => {

    const [song, setSong] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:4000/songs/${props.songId}`)
            .then(res => {
                setIsLoading(false)
                setSong(res.data)
            })
            .catch(e => {
                setErrorMessage("There was a problem, please refresh and try again")
                setIsLoading(false)
                
            })
    }, [])

    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {!isLoading ? 
                <li >{song.title} by {song.artist}</li> : 
                <h2>Loading...</h2>}
                <Link to="/songs">View all songs</Link>
        </div>
    )
}

export default ViewSong