import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DeleteSong from './DeleteSong'

const ViewSongs = () => {
    const [songs, setSongs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:3000/songs`)
            .then(res => {
                setIsLoading(false)
                setSongs(res.data)
            })
            .catch(e => {
                setErrorMessage("There was a problem, please refresh and try again")
                setIsLoading(false)
            })
    }, [])

    function renderSongs(){
        return (
            <>
            {songs.map((song, index) => (
                    <li key={`${song}-${index}`}>
                        {index}. {song.title} by {song.artist}
                        <Link to={`/songs/${song.id}`}>View</Link>
                        <DeleteSong 
                            songId={song.id}
                            onDelete={() => setSongs(songs.filter((s, i) => s.id !== song.id))}
                        />
                    </li>
                ))}
            </>
        )
    }

    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {!isLoading ? renderSongs(): <h2>Loading...</h2>}
        </div>
    )
}

export default ViewSongs