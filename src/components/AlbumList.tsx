import React, { FC } from 'react';
import styled from 'styled-components';
import { SiteContent } from '../styles/styles';
import { Album, AlbumProps } from './Album';

type AlbumsProps = {
    albums: AlbumProps[]
}

const Container = styled(SiteContent)`
background:rgba(255,255,255,0.5);
  margin: auto;
  width: 50%;
  max-width: 800px;
`;

export const AlbumsList: FC<AlbumsProps> = ({ albums }) => (
  <Container>
    <>
      <h1>Albumlist</h1>
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
    </>
  </Container>

);
