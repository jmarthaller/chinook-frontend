import React, { useState } from 'react';



function AlbumsTile({ title, id, onDeleteAlbum }) {
  const [updateAlbumStatus, setUpdateAlbumStatus] = useState(false);
  const [updateAlbumTitle, setUpdateAlbumTitle] = useState("");


  async function handleUpdateSubmit(e) {
    // e.preventDefault();
    // const newAlbumToPost = {
    //   title: newAlbumTitle,
    //   artist_id: 300,
    // };
    // const response = await fetch(`http://localhost:3001/albums`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //     },
    //     body: JSON.stringify(newAlbumToPost),
    // });
    // const jsonify = await response.json();
    // onAddAlbumToList(jsonify);
    // e.target.reset();
  }

  const toggleUpdate = () => {
    setUpdateAlbumStatus(!updateAlbumStatus)
  }

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
                <h1>Album: {title}</h1>
                <button onClick={handleDeleteReview}>X</button>
                <button onClick={toggleUpdate}>Update Album Title</button>
                {updateAlbumStatus ?
                  <form className="update-album-form-input" onSubmit={handleUpdateSubmit}>
                  <input
                    className="update-album-form-input"
                    type="text"
                    id="title"
                    value={updateAlbumTitle}
                    placeholder="New Title"
                    onChange={(e) => setUpdateAlbumTitle(e.target.value)}
                  />
                  <br></br>
                  <input
                    className="submit-update-album-btn"
                    type="submit"
                    value="Submit New Album"
                />
              </form>
                
                : null
                }
            </div>
    )
}


export default AlbumsTile;