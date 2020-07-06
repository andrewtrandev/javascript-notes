import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

const EditSong = (props) => {
  const [songTitle, setSongTitle] = useState('');
  const [songArtist, setSongArtist] = useState('');

  const [isEdited, setIsEdited] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:4000/songs/${props.songId}`)
      .then((res) => {
        setIsLoading(false);

        setSongTitle(res.data.title);
        setSongArtist(res.data.artist);
      })
      .catch((e) => {
        setErrorMessage('There was a problem, please refresh and try again');
        setIsLoading(false);
      });
  }, []);

  function editSong() {
    if (songTitle && songArtist) {
      axios
        .put(`http://localhost:4000/songs/${props.songId}`, {
          song: {
            title: songTitle,
            artist: songArtist,
          },
        })
        .then(() => setIsEdited(true));
    } else {
      setErrorMessage('Please fill out the values');
    }
  }

  return (
    <div>
      {errorMessage && <h3>{errorMessage}</h3>}
      {!isLoading ? (
        <div>
          <input
            placeholder='Song Title'
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
          />
          <input
            placeholder='Song Artist'
            value={songArtist}
            onChange={(e) => setSongArtist(e.target.value)}
          />
          <button onClick={editSong}>Edit Song</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
      <Link to='/songs'>View all songs</Link>
      {isEdited && <Redirect to={`/songs/${props.songId}`} />}
    </div>
  );
};

export default EditSong;
