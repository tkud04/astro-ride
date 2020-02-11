import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';


import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';

/////////////////////////////////////////////////

const ret = createStackNavigator(
  {
	Dashboard: {
		screen: DashboardScreen,
		headerLeft: null,
	},
	Profile: {
		screen: ProfileScreen,
		headerLeft: null,
	},
	
  },
);

export default ret;
