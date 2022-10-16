import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

type NavigationModalProps = {
    children: JSX.Element;
};

function SafeView({ children }: NavigationModalProps): JSX.Element {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
            {children}
        </SafeAreaView>
    );
}

export default SafeView;
