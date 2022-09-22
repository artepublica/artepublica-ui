import { useRef } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsData from 'highcharts/modules/data';
import HighchartsDependecyWheel from 'highcharts/modules/dependency-wheel';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsNetworkGraph from 'highcharts/modules/networkgraph';
import HighchartsSankey from 'highcharts/modules/sankey';
import HighchartsSeriesLabel from 'highcharts/modules/series-label';
import HighchartsStreamgraph from 'highcharts/modules/streamgraph';
import Theme from 'highcharts/themes/brand-light';

HighchartsData(Highcharts);
HighchartsSeriesLabel(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsNetworkGraph(Highcharts);
HighchartsSankey(Highcharts);
HighchartsDependecyWheel(Highcharts);
HighchartsStreamgraph(Highcharts);

type ChartLightProps = {
    options: Highcharts.Options;
};

function ChartLight({ options }: ChartLightProps): JSX.Element {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    Theme(Highcharts);

    return (
        <HighchartsReact
            constructorType="chart"
            highcharts={Highcharts}
            options={{ ...options, chart: { ...options.chart, backgroundColor: '#FFFFFF' } }}
            ref={chartComponentRef}
        />
    );
}

export default ChartLight;
