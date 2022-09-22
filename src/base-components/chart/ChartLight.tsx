import Highcharts from 'highcharts';

import { useTheme } from '@utils';

import MinimalAutoheightWebView from './MinimalAutoheightWebView';

type ChartLightProps = {
    options: Highcharts.Options;
};

function ChartLight({ options }: ChartLightProps): JSX.Element {
    const { theme } = useTheme();

    const injectScript = `
        var chart = function () {
            Highcharts.chart('container', ${JSON.stringify({ ...options, chart: { ...options.chart, backgroundColor: theme.background } })});
        }

        chart();
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
            </body>
        </html>
    `;

    return (
        <MinimalAutoheightWebView
            testID="chart"
            javaScriptEnabled
            injectedJavaScript={injectScript}
            source={{
                html,
            }}
            startInLoadingState
            style={{ backgroundColor: 'transparent' }}
        />
    );
}

export default ChartLight;
