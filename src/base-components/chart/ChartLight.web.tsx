import { useEffect, useRef, useState } from 'react';

import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';

import { useTheme } from '@utils';

const loadHighchartsModules = async (callback: () => void) => {
  Promise.all([
    //import('highcharts/modules/dependency-wheel'),
    import('highcharts/modules/networkgraph'),
    import('highcharts/modules/sankey'),
    import('highcharts/modules/series-label'),
    import('highcharts/modules/streamgraph'),
    import('highcharts/themes/brand-light'),
  ]).then(callback);
};

type ChartLightProps = {
  options: Highcharts.Options;
};

function ChartLight({ options }: ChartLightProps): JSX.Element {
  const { theme } = useTheme();
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHighchartsModules(async () => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <HighchartsReact
      constructorType='chart'
      highcharts={Highcharts}
      options={{
        ...options,
        chart: { ...options.chart, backgroundColor: theme.background },
      }}
      ref={chartComponentRef}
    />
  );
}

export default ChartLight;
