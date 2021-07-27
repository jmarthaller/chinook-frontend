import React from 'react';



function AlbumsTile({ title, artist }) {

    return (
            <div style={{textDecoration: "none"}} >
                <div>
                    <h1>{title}</h1>
                    <h2>By: {artist}</h2>
                </div>
            </div>
    )
}


export default AlbumsTile;