import React from 'react';
import axios from 'axios';

const DeleteSong = ({ songId, onDelete }) => {
  function deleteSong() {
    axios.delete(`http://localhost:3000/songs/${songId}`).then(onDelete);
  }

  return <button onClick={deleteSong}>X</button>;
};

export default DeleteSong;
