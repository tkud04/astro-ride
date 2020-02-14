import 'react-native-gesture-handler';

import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen, AppLoading } from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as helpers from './Helpers';
import { NavigationContainer } from '@react-navigation/native';
import AppStyles from './styles/AppStyles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerComponent from './components/CustomDrawerComponent';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import SvgIcon from './components/SvgIcon';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import { Notifications } from 'expo';
import * as TaskManager from 'expo-task-manager';
import FlashMessage from 'react-native-flash-message';
import {ThemeContext,UserContext} from './MyContexts.js';


const LOCATION_TASK_NAME = 'background-location-task';
const Drawer = createDrawerNavigator();

export default class App extends React.Component {
constructor(props){
	super(props);
	this.uuu = {};
    //this.hu = helpers.getLoggedInUser();	
	
	this.state = {
    isLoadingComplete: false,
    isLoggedIn: false,
    isRealLoadingComplete: false,
	user:  {},
	ttk: null,
	up: this._updateUser,
	loggedIn: false
  };
  
	
  //this.resolve(this.hu);
}
  
  _notificationSubscription = null;
  
  //this._notificationSubscription = Notifications.addListener(this._handleNotification);

  _handleNotification = (notification) => {
	   console.log(notification.origin);
	   console.log(JSON.stringify(notification.data));
    this.setState({notification: notification});
  };
  
  _updateUser = (u) => {
	  console.log("ret: ",u);
    this.state.user = u[0];
    this.state.ttk = u[0].tk;
	this.state.loggedIn = (this.state.ttk !== null);
	console.log("user context updated with ",[this.state.isLoggedIn]);
  };

  render() {
   
    if (!this.state.isRealLoadingComplete && !this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
		//helpers.getLoggedInUser((u) => {this._updateUser(u)});
		
		  helpers.getLoggedInUser().then((dt) => {
			  this.state.user = dt;					  
			  this.state.isRealLoadingComplete = true;
			  this.state.isLoggedIn = true;
			  console.log("uu",this.state.user);
			  this.state.up([this.state.user]);	   
			 
		 });
		  return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
		  <ThemeContext.Provider>
		     <UserContext.Provider value={this.state}>			
		       <NavigationContainer>
			    <Drawer.Navigator  initialRouteName='Dashboard' drawerContent={props => (<CustomDrawerComponent {...props}/>)}>
				   {this.state.isLoggedIn ? (
				    <Drawer.Screen name="Dashboard" component={AppStack} options={{drawerIcon: <SvgIcon xml={helpers.insertAppStyle(AppStyles.svg.cardArea)} w={40} h={20}/> }}/>
				   ) : (
				    <Drawer.Screen name="Sign in" component={AuthStack} options={{drawerIcon: <SvgIcon xml={helpers.insertAppStyle(AppStyles.svg.cardArea)} w={40} h={20}/> }}/>
				   )}
           
                </Drawer.Navigator>
			   </NavigationContainer>
		     </UserContext.Provider>
		  </ThemeContext.Provider>
          <FlashMessage position="bottom" />
        </View>
      );	
    }
  }
 

  _loadResourcesAsync = async () => {
    return Promise.all([
      /**
	  Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
	  **/
      await Font.loadAsync({
        // This is the font that we are using for our tab bar
        //...Ionicons.font,
		//...FontAwesome.font
		'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf')
      }),
    ]);
  };
  

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

/**
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
	console.log("Error: ",error.message);
    return;
  }
  if (data) {
    const { locations } = data;
    // do something with the locations captured in the background
	console.log("Locations: ",locations);
  }
});
**/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
	fontFamily: 'Roboto'
  },
});
