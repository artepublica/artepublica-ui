import Highcharts from 'highcharts';

import { useTheme } from '@utils';

import MinimalAutoheightWebView from './MinimalAutoheightWebView';

type ChartProps = {
    options: Highcharts.Options;
};

function ChartDark({ options }: ChartProps): JSX.Element {
    const { theme } = useTheme();

    const injectScript = `
        Highcharts.chart('container', ${JSON.stringify({ ...options, chart: { ...options.chart, backgroundColor: theme.background } })});
    `;

    const html = `
        <!DOCTYPE html>
        <html>
            <head>
                <script src="https://code.highcharts.com/highcharts.js"></script>
                <script src="https://code.highcharts.com/modules/data.js"></script>
                <script src="https://code.highcharts.com/modules/series-label.js"></script>
                <script src="https://code.highcharts.com/modules/accessibility.js"></script>
                <script src="https://code.highcharts.com/modules/networkgraph.js"></script>
                <script src="https://code.highcharts.com/modules/sankey.js"></script>
                <script src="https://code.highcharts.com/modules/dependencywheel.js"></script>
                <script src="https://code.highcharts.com/modules/streamgraph.js"></script>
                <script src="https://code.highcharts.com/themes/brand-dark.js"></script>
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

export default ChartDark;
