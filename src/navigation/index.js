import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import StackNavigation from './stack/stackNav';

const Root = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
export default Root;
