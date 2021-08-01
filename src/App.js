import React, { useState, useEffect } from 'react';
import './App.css';
import AlbumsContainter from './AlbumsContainer';
import NewAlbumForm from './NewAlbumForm';

function App() {
  const [albumsState, setAlbumsState] = useState([])


  useEffect(() => {
    const fetchAlbumsOnLaunch = async () => {
      const response = await fetch(`http://localhost:3001/albums`);
      const jsonify = await response.json();
      setAlbumsState(jsonify);
    }
    fetchAlbumsOnLaunch();
  }, [])

  function onAddAlbumToList(newAlbumToAdd) {
    setAlbumsState([...albumsState, newAlbumToAdd])
  }

  function onDeleteAlbum(id) {
    const filteredAlbums = albumsState.filter(album => album.id !== id)
    setAlbumsState(filteredAlbums)
  }

  function onUpdateAlbum(data, formData) {
    const updatedReviews = albumsState.map((album) => {
      if (album.id === data.id) {
        return { ...album, title: formData.title }
      } else {
        return album
      }
    })
    setAlbumsState(updatedReviews)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jacob Marthaller Hasura Assessment</h1>
        <NewAlbumForm onAddAlbumToList={onAddAlbumToList} />
        <AlbumsContainter albumsState={albumsState} onDeleteAlbum={onDeleteAlbum} onUpdateAlbum={onUpdateAlbum} />
      </header>
    </div>
  );
}

export default App;
