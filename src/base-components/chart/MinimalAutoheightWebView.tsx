import { ComponentProps } from 'react';

import {
  ForceResponsiveViewportFeature,
  HandleHTMLDimensionsFeature,
  makeWebshell,
  useAutoheight,
} from '@formidable-webview/webshell';
import WebView from 'react-native-webview';
const Webshell = makeWebshell(
  WebView,
  new HandleHTMLDimensionsFeature(),
  new ForceResponsiveViewportFeature({ maxScale: 1 }),
);

export type WebshellProps = ComponentProps<typeof Webshell>;

function MinimalAutoheightWebView(webshellProps: WebshellProps): JSX.Element {
  const { autoheightWebshellProps } = useAutoheight({
    webshellProps,
  });
  return <Webshell {...autoheightWebshellProps} />;
}

export default MinimalAutoheightWebView;
