import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AppInputImageHeader from '../components/AppInputImageHeader';
import AppStyles from '../styles/AppStyles';
import AddNumberScreen from '../screens/AddNumberScreen';
import VerifyNumberScreen from '../screens/VerifyNumberScreen';
import AddNameScreen from '../screens/AddNameScreen';
import AddLoginScreen from '../screens/AddLoginScreen';


////////////////////////////////////////////////

const Stack = createStackNavigator();


let AuthStack = () => (
<Stack.Navigator>

				  <Stack.Screen
                  name="AddNumber"
	              component={AddNumberScreen}
				  initialParams={{goBack: () => {this.props.navigation.goBack()}}}
				  options={({route}) => ({
					headerStyle: {
		            backgroundColor: AppStyles.headerBackground,
		            height: AppStyles.headerHeight
	              },
	             headerTitle: () => <AppInputImageHeader xml={AppStyles.svg.headerPhone}  leftParam = "goBack" r = {route} title="Sign up" subtitle="Enter phone number"  sml={30}/>,
	             headerTintColor: AppStyles.headerColor,
	             headerLeft: null  
				  })}
	              
                />
                </Stack.Navigator>
);

export default AuthStack;
