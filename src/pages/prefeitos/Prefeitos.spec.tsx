import { render } from '@testing-library/react-native';

import Prefeitos from './Prefeitos';

describe('<Prefeitos />', () => {
    it('should render', () => {
        const { getAllByTestId } = render(<Prefeitos obras={[]} />);

        const charts = getAllByTestId('chart');

        expect(charts.length).toEqual(1);
    });
});
