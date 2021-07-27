import React, { useState, useEffect } from 'react';
import './App.css';
import AlbumsContainter from './AlbumsContainer';

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jacob Marthaller Hasura Assessment</h1>
        <AlbumsContainter albumsState={albumsState} />
      </header>
    </div>
  );
}

export default App;
