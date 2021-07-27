import React from 'react';
import AlbumsTile from './AlbumsTile';

function AlbumsContainer({ albumsState }) {


        
            const allAlbums = albumsState.map((album) => {
                return <AlbumsTile 
                key={album.artist_id}
                title={album.title}
                artist={album.musical_artist}
                />
            })


        return (
            <div>
                <h4 className="albums-container-header">POPULAR ALBUMS ON THE PLATFORM</h4>
                <div className="albums-container">
                    {allAlbums}
                </div>
            </div>
        )

}


export default AlbumsContainer;