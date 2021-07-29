import React from 'react';
import AlbumsTile from './AlbumsTile';

function AlbumsContainer({ albumsState, onDeleteAlbum }) {

            const allAlbums = albumsState.map((album) => {
                return <AlbumsTile 
                key={album.id}
                id={album.id}
                artistId={album.artist_id}
                title={album.title}
                artist={album.musical_artist}
                onDeleteAlbum={onDeleteAlbum}
                />
            })


        return (
            <div>
                <h4 className="albums-container-header">POPULAR ALBUMS CURRENTLY ON THE PLATFORM</h4>
                <div className="albums-container">
                    {allAlbums}
                </div>
            </div>
        )

}


export default AlbumsContainer;