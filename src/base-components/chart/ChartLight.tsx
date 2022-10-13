import Highcharts from 'highcharts';

import { useTheme } from '@utils';

import MinimalAutoheightWebView from './MinimalAutoheightWebView';

type ChartLightProps = {
    options: Highcharts.Options;
};

function ChartLight({ options }: ChartLightProps): JSX.Element | undefined {
    const { theme } = useTheme();

    const script = `
        Highcharts.chart('container', ${JSON.stringify({ ...options, chart: { ...options.chart, backgroundColor: theme.background } })});
    `;

    const html = `
        <!DOCTYPE html>
        <html>
            <head>
                <script src="https://code.highcharts.com/highcharts.js"></script>
                <script src="https://code.highcharts.com/modules/series-label.js"></script>
                <script src="https://code.highcharts.com/modules/networkgraph.js"></script>
                <script src="https://code.highcharts.com/modules/sankey.js"></script>
                <script src="https://code.highcharts.com/modules/dependencywheel.js"></script>
                <script src="https://code.highcharts.com/modules/streamgraph.js"></script>
                <script src="https://code.highcharts.com/themes/brand-light.js"></script>
            </head>

            <body style="margin: 0 !important; padding: 0 !important; background-color: ${theme.background};">
                <div id="container"></div>
                <script type="text/javascript">
                    ${script}
                </script>
            </body>
        </html>
    `;

    return (
        <MinimalAutoheightWebView
            testID="chart"
            source={{
                html,
            }}
            startInLoadingState
            style={{ backgroundColor: 'transparent' }}
            contentMode="mobile"
        />
    );
}

export default ChartLight;
