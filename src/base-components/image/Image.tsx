import { Image as NativeImage, ImageSourcePropType } from 'react-native';

import imagems from '@assets/imagems';

type ImageProps = {
    source?: string;
};

function Image({ source }: ImageProps): JSX.Element {
    const typed_imagems: Record<string, ImageSourcePropType> = imagems;
    const img = typed_imagems[source ?? ''];
    if (img) {
        return <NativeImage source={img} style={{ height: 100, width: 50 }} />;
    }
    return <></>;
}

export default Image;
