import { useEffect } from 'react';

import { StackActions, useNavigation } from '@react-navigation/native';

function NoMatch(): JSX.Element {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.dispatch(StackActions.replace('NotFound'));
  }, []);

  return <></>;
}

export default NoMatch;
