import { Image as NativeImage, ImageSourcePropType } from 'react-native';

import imagems from '@assets/imagems';

type ImageProps = {
    source?: string;
    height?: number;
    width?: number;
};

function Image({ source, height, width }: ImageProps): JSX.Element {
    const typed_imagems: Record<string, ImageSourcePropType> = imagems;
    const img = typed_imagems[source ?? ''];
    if (img) {
        return <NativeImage source={img} style={{ height, width }} />;
    }
    return <></>;
}

export default Image;
