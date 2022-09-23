import { render } from '@testing-library/react-native';

import PublicArtTotal19892000 from './PublicArtTotal19892000';

describe('<PublicArtTotal19892000 />', () => {
    it('should render', () => {
        const { getAllByTestId } = render(<PublicArtTotal19892000 />);

        const charts = getAllByTestId('chart');

        expect(charts.length).toEqual(1);
    });
});
