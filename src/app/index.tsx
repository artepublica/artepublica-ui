import { JSX } from 'react';

import { Redirect } from 'expo-router';

export default function Index(): JSX.Element {
  return <Redirect href='/(root)/(menu)/(home)/map' />;
}
