import React from 'react';



function AlbumsTile({ title, artist }) {

    return (
            <div className="album-card" >
                <h1>{title}</h1>
                <h2>By: {artist}</h2>
            </div>
    )
}


export default AlbumsTile;