import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AppInputImageHeader from '../components/AppInputImageHeader';
import AppHomeHeader from '../components/AppHomeHeader';
import AppStyles from '../styles/AppStyles';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SetDestinationScreen from '../screens/SetDestinationScreen';
import ConfirmRideScreen from '../screens/ConfirmRideScreen';


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
                  name="SetDestination"
	              component={SetDestinationScreen}
				  options={({route}) => ({
					headerStyle: {
		            backgroundColor: AppStyles.headerBackground,
		            height: AppStyles.headerHeight
	              },
	             header: () => <AppInputImageHeader xml={AppStyles.svg.headerPhone}  leftParam = "goBack"  r = {route} title="AstroRide" subtitle="Where are you going?"  sml={40}/>,
	             headerTintColor: AppStyles.headerColor,
	             headerLeft: null  
				  })}
	              
                /> 		
				<Stack.Screen
                  name="ConfirmRide"
	              component={ConfirmRideScreen}
				  options={({route}) => ({
					headerStyle: {
		            backgroundColor: AppStyles.headerBackground,
		            height: AppStyles.headerHeight
	              },
	             header: () => <AppInputImageHeader xml={AppStyles.svg.headerPhone}  leftParam = "goBack"  r = {route} title="AstroRide" subtitle="Confirm ride"  sml={40}/>,
	             headerTintColor: AppStyles.headerColor,
	             headerLeft: null  
				  })}
	              
                /> 		
					
				
                </Stack.Navigator>
);

export default AppStack;
