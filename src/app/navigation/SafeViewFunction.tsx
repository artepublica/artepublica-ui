import React, { FunctionComponent } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

type NavigationModalProps = {
    Component: FunctionComponent;
};

function SafeViewFunction({ Component }: NavigationModalProps): FunctionComponent {
    return (props) => {
        return (
            <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
                <Component {...props} />
            </SafeAreaView>
        );
    };
}

export default SafeViewFunction;
