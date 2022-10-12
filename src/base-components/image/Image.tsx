import { Image as NativeImage, ImageSourcePropType } from 'react-native';

import imagems from '@assets/imagems';

type ImageProps = {
    source?: string;
    height?: number;
    width?: number;
};

function Image({ source, height, width }: ImageProps): JSX.Element {
    if (source && Object.keys(imagems).includes(source)) {
        const typed_imagems: Record<string, ImageSourcePropType> = imagems;

        return <NativeImage source={typed_imagems[source]} style={{ height, width }} />;
    }
    return <></>;
}

export default Image;
