import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AppStyles from '../styles/AppStyles';
import AppHomeHeader from '../components/AppHomeHeader';
import AppInputImageHeader from '../components/AppInputImageHeader';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DisplayLatLng from '../screens/DisplayLatLng';

/////////////////////////////////////////////////

const Stack = createStackNavigator();

/**
  {
	Dashboard: {
		screen: DashboardScreen,
		headerLeft: null,
	},
	Profile: {
		screen: ProfileScreen,
		headerLeft: null,
	},
	DisplayLatLng: {
		screen: DisplayLatLng,
		headerLeft: null,
	},
	
  },
);

**/

let AppStack = () => (
<Stack.Navigator>
                 <Stack.Screen
                  name="Dashboard"
	              component={DashboardScreen}
				  options={{
				    headerStyle: {
		            backgroundColor: AppStyles.headerBackground,
		            height: AppStyles.headerHeight
	              },
	             headerTitle: () => <AppHomeHeader xml={AppStyles.svg.chartBar} navv = {navigation} title="AstroRide" subtitle="Dashboard"/>,
	             headerTintColor: AppStyles.headerColor,
	             headerLeft: null
				  }}
	              
                />
				<Stack.Screen
                  name="DisplayLatLng"
	              component={DisplayLatLng}
				  options={{
					headerStyle: {
		            backgroundColor: AppStyles.headerBackground,
		            height: AppStyles.headerHeight
	              },
	             headerTitle: () => <AppHomeHeader xml={AppStyles.svg.chartBar} navv = {navigation} title="AstroRide" subtitle="DisplayLatLng"/>,
	             headerTintColor: AppStyles.headerColor,
	             headerLeft: null  
				  }}
	              
                />
				
                </Stack.Navigator>
);

export default AppStack;
