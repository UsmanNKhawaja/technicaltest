import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {authScreens} from './data';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {authScreens.map((item, index) => (
        <Stack.Screen
          key={item.id}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigation;
