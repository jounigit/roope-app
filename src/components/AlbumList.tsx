import React, { FC } from 'react';
import { Composition } from 'atomic-layout';
// The Album component we have created in
// the previous steps of this tutorial.
import { Album, AlbumProps } from './Album';

type AlbumsProps = {
    albums: AlbumProps[]
}

export const AlbumsList: FC<AlbumsProps> = ({ albums }) => (
  <Composition gap={10}>
    {albums.map((album) => (
      <Album
        key={album.id}
        title={album.title}
        imageUrl={album.imageUrl}
        releaseYear={album.releaseYear}
        artistName={album.artistName}
        id={0}
      />
    ))}
  </Composition>
);
