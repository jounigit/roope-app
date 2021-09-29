import React from 'react';
import { AlbumsList } from '../components/AlbumList';
import albumsData from '../data/albumsList.json';

const Albums: React.FC = () => (
  <AlbumsList albums={albumsData} />
);

export default Albums;
