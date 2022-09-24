import { render } from '@testing-library/react-native';

import MandatoPrefeito from './MandatoPrefeito';

describe('<MandatoPrefeito />', () => {
    it('should render', () => {
        const { getAllByTestId } = render(<MandatoPrefeito obras={[]} />);

        const charts = getAllByTestId('chart');

        expect(charts.length).toEqual(3);
    });
});
