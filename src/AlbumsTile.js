import React, { useState } from 'react';



function AlbumsTile({ title, id, onDeleteAlbum, onUpdateAlbum }) {
  const [updateAlbumStatus, setUpdateAlbumStatus] = useState(false);
  const [updateAlbumTitle, setUpdateAlbumTitle] = useState("");



  async function handleUpdateSubmit(e) {
    e.preventDefault();

    const updatedAlbumData = {
      title: updateAlbumTitle,
    };

    const response = await fetch(`http://localhost:3001/albums/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updatedAlbumData.title,
        }),
      }
    );
    const jsonify = await response.json();
    onUpdateAlbum(jsonify, updatedAlbumData);
    setUpdateAlbumTitle("");
    setUpdateAlbumStatus(!updateAlbumStatus)
  }

  const toggleUpdate = () => {
    setUpdateAlbumStatus(!updateAlbumStatus)
  }

    function handleDeleteAlbum() {
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
                <button onClick={handleDeleteAlbum}>X</button>
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
                    value="Submit"
                />
              </form>
                
                : null
                }
            </div>
    )
}


export default AlbumsTile;