import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';


import DashboardScreen from '../screens/DashboardScreen';

/////////////////////////////////////////////////

const ret = createStackNavigator(
  {
	Dashboard: {
		screen: DashboardScreen,
		headerLeft: null,
	},
	
  },
);

export default ret;
