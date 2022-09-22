import { useRef } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsDependecyWheel from 'highcharts/modules/dependency-wheel';
import HighchartsNetworkGraph from 'highcharts/modules/networkgraph';
import HighchartsSankey from 'highcharts/modules/sankey';
import HighchartsSeriesLabel from 'highcharts/modules/series-label';
import HighchartsStreamgraph from 'highcharts/modules/streamgraph';
import Theme from 'highcharts/themes/brand-dark';

import { useTheme } from '@utils';

HighchartsSeriesLabel(Highcharts);
HighchartsNetworkGraph(Highcharts);
HighchartsSankey(Highcharts);
HighchartsDependecyWheel(Highcharts);
HighchartsStreamgraph(Highcharts);

type ChartDarkProps = {
    options: Highcharts.Options;
};

function ChartDark({ options }: ChartDarkProps): JSX.Element {
    const { theme } = useTheme();
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    Theme(Highcharts);

    return (
        <HighchartsReact
            constructorType="chart"
            highcharts={Highcharts}
            options={{ ...options, chart: { ...options.chart, backgroundColor: theme.background } }}
            ref={chartComponentRef}
        />
    );
}

export default ChartDark;
