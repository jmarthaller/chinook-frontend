import React, { useState } from "react";

function NewAlbumForm({ onAddAlbumToList }) {
  const [newAlbumTitle, setNewAlbumTitle] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const newAlbumToPost = {
      title: newAlbumTitle,
      artist_id: 300,
    };
    const response = await fetch(`http://localhost:3001/albums`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAlbumToPost),
    });
    const jsonify = await response.json();
    onAddAlbumToList(jsonify);
    e.target.reset();
  }

  return (
    <div className="new-almbum-form">
      <form className="new-album-form-input" onSubmit={handleSubmit}>
        <input
          className="new-album-form-input"
          type="text"
          id="title"
          value={newAlbumTitle}
          placeholder="Title"
          onChange={(e) => setNewAlbumTitle(e.target.value)}
        />
        <br></br>
        {/* <input
          type="text"
          id="artist"
          value={newAlbumArtist}
          placeholder="Artist"
          onChange={(e) => setNewAlbumArtist(e.target.value)}
        />
        <br></br> */}
        <input
          className="submit-new-album-btn"
          type="submit"
          value="Submit New Album"
        />
      </form>
    </div>
  );
}

export default NewAlbumForm;
