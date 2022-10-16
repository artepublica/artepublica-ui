import { NavigationContainer as ReactNavigationContainer, createNavigationContainerRef } from '@react-navigation/native';

import { useTheme } from '@utils';

import linking from './linking';
import { RootNavigatorParamList } from './RootNavigator';

type NavigationContainerProps = {
    children?: JSX.Element;
};

function NavigationContainer({ children }: NavigationContainerProps): JSX.Element {
    const { theme } = useTheme();

    const navigationRef = createNavigationContainerRef<RootNavigatorParamList>();

    return (
        <ReactNavigationContainer
            ref={navigationRef}
            theme={{ colors: theme.navigation, dark: theme.dark }}
            linking={linking}
            documentTitle={{
                formatter: (options) => {
                    return options != null && options.title != null ? `Arte Pública - ${options.title}` : 'Arte Pública - Rio de Janeiro';
                },
            }}
        >
            {children}
        </ReactNavigationContainer>
    );
}

export default NavigationContainer;
