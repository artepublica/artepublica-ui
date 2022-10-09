import { EdgeInsets } from 'react-native-safe-area-context';

function calculateNavigationModalHeight(height: number, insets: EdgeInsets, modalHeight?: '25%' | '50%' | '75%' | '100%' | number): number {
    if (typeof modalHeight === 'number') {
        return modalHeight;
    }

    const baseHeight = height - insets.top - insets.bottom;
    switch (modalHeight) {
        case '25%': {
            return baseHeight / 4;
        }
        case '50%': {
            return baseHeight / 2;
        }
        case '75%': {
            return (baseHeight / 4) * 3;
        }
        case '100%': {
            return baseHeight;
        }
        default: {
            return baseHeight;
        }
    }
}

export default calculateNavigationModalHeight;
