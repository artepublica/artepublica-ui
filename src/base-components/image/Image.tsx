import React from 'react';

import { ImageSourcePropType, Image as NativeImage } from 'react-native';

import images from '@utils/data/images'; //TODO: use or create analysis to type

type ImageProps = {
  source?: string;
  height?: number;
  width?: number;
};

function Image({ source, height, width }: ImageProps): JSX.Element {
  if (source && Object.keys(images).includes(source)) {
    const typed_images: Record<string, ImageSourcePropType> = images;

    return (
      <NativeImage source={typed_images[source]} style={{ height, width }} />
    );
  }
  return <></>;
}

export default Image;
