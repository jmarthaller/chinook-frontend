import React from 'react';
import AlbumsTile from './AlbumsTile';

function AlbumsContainer({ albumsState, onDeleteAlbum, onUpdateAlbum }) {

            const allAlbums = albumsState.map((album) => {
                return <AlbumsTile 
                key={album.id}
                id={album.id}
                artistId={album.artist_id}
                title={album.title}
                onDeleteAlbum={onDeleteAlbum}
                onUpdateAlbum={onUpdateAlbum}
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