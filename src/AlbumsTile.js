import React from 'react';



function AlbumsTile({ title, id, onDeleteAlbum }) {

    function handleDeleteReview() {
        fetch(`http://localhost:3001/albums/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        onDeleteAlbum(id);
      }

    return (
            <div className="album-card" >
                <h1>{title}</h1>
                <h3 onClick={handleDeleteReview}>X</h3>
            </div>
    )
}


export default AlbumsTile;