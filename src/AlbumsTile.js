import React from 'react';



function AlbumsTile({ title, artist, id, onDeleteAlbum }) {

    function handleDeleteReview() {
        fetch(`http://localhost:3001/albums/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(id)
        onDeleteAlbum(id);
      }

    return (
            <div className="album-card" >
                <h1>{title}</h1>
                <h2>By: {artist}</h2>
                <h3 onClick={handleDeleteReview}>X</h3>
            </div>
    )
}


export default AlbumsTile;