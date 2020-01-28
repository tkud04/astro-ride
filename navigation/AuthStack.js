import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import GuestScreen from '../screens/GuestScreen';


/////////////////////////////////////////////////

const ret = createStackNavigator(
  {
	Welcome: {
		screen: GuestScreen,
		headerLeft: null,
	},
	'Sign in': {
		screen: SigninScreen,
		headerLeft: null,
	},
	'Sign up': {
		screen: SignupScreen,
		headerLeft: null,
	},
  },
);

export default ret;
