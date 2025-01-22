import Highcharts from 'highcharts';

import { useTheme } from '@utils';

import ChartDark from './ChartDark';
import ChartLight from './ChartLight';

type ChartProps = {
  options: Highcharts.Options;
};

function Chart({ options }: ChartProps): JSX.Element {
  const { theme } = useTheme();

  const _options = { exporting: { scale: 1, sourceWidth: 1620 }, ...options };

  return theme.dark ? <ChartDark options={_options} /> : <ChartLight options={options} />;
}

export default Chart;
