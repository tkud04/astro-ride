import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import GuestScreen from '../screens/GuestScreen';
import AddNumberScreen from '../screens/AddNumberScreen';
import VerifyNumberScreen from '../screens/VerifyNumberScreen';
import AddNameScreen from '../screens/AddNameScreen';
import AddLoginScreen from '../screens/AddLoginScreen';


/////////////////////////////////////////////////

const ret = createStackNavigator(
  {
	Welcome: {
		screen: GuestScreen,
		headerLeft: null,
	},
	AddNumber: {
		screen: AddNumberScreen,
		headerLeft: null,
	},
	VerifyNumber: {
		screen: VerifyNumberScreen,
		headerLeft: null,
	},
	AddName: {
		screen: AddNameScreen,
		headerLeft: null,
	},
	AddLogin: {
		screen: AddLoginScreen,
		headerLeft: null,
	}
  },
);

export default ret;
