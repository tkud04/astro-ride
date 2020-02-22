import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AppInputImageHeader from '../components/AppInputImageHeader';
import AppHomeHeader from '../components/AppHomeHeader';
import AppStyles from '../styles/AppStyles';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TripsScreen from '../screens/TripsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import DisplayLatLng from '../screens/DisplayLatLng';

/////////////////////////////////////////////////

const Stack = createStackNavigator();


let AppStack = () => (
<Stack.Navigator>
				<Stack.Screen
                  name="Dashboard"
	              component={DashboardScreen}
				  options={({route}) => ({
					headerStyle: {
		            backgroundColor: AppStyles.headerBackground,
		            height: AppStyles.headerHeight
	              },
	             header: () => <AppHomeHeader xml={AppStyles.svg.chartBar}  r = {route} title="AstroRide" subtitle="Dashboard"  sml={100}/>,
	             headerTintColor: AppStyles.headerColor,
	             headerLeft: null  
				  })}
	              
                />
                  <Stack.Screen
                  name="Trips"
	              component={TripsScreen}
				  options={({route}) => ({
					headerStyle: {
		            backgroundColor: AppStyles.headerBackground,
		            height: AppStyles.headerHeight
	              },
	             header: () => <AppHomeHeader xml={AppStyles.svg.chartBar}  r = {route} title="AstroRide" subtitle="Trips"  sml={40}/>,
	             headerTintColor: AppStyles.headerColor,
	             headerLeft: null  
				  })}
	              
                /> 		
				<Stack.Screen
                  name="Payment"
	              component={PaymentScreen}
				  options={({route}) => ({
					headerStyle: {
		            backgroundColor: AppStyles.headerBackground,
		            height: AppStyles.headerHeight
	              },
	             header: () => <AppHomeHeader xml={AppStyles.svg.chartBar}  r = {route} title="AstroRide" subtitle="Payment"  sml={40}/>,
	             headerTintColor: AppStyles.headerColor,
	             headerLeft: null  
				  })}
	              
                /> 				
				
                </Stack.Navigator>
);

export default AppStack;
