import React, { FC } from 'react';
import { Composition } from 'atomic-layout';
import { Image } from './atoms';

const areasMobile = `
  thumbnail
  content
  actions
`;

const areasTablet = `
  thumbnail content
  thumbnail actions
`;

export type AlbumProps = {
  id: number,
  title: string,
  imageUrl: string,
  releaseYear: number,
  artistName: string
}

export const Album: FC<AlbumProps> = ({
  title, imageUrl, releaseYear, artistName,
}) => (
  <Composition
    inline
    // as={AlbumContainer}
    areas={areasMobile}
    areasMd={areasTablet}
    gap={20}
    gapMd={30}
    padding={32}
  >
    {(Areas) => (
      <>
        <Areas.Thumbnail>
          <Image src={imageUrl} alt={title} />
        </Areas.Thumbnail>
        <Areas.Content>
          <h3>{title}</h3>
          <p>
            {artistName}
            {' '}
            •
            {' '}
            {releaseYear}
          </p>
        </Areas.Content>
        <Areas.Actions>
          <button type="button">Buy</button>
        </Areas.Actions>
      </>
    )}
  </Composition>
);
