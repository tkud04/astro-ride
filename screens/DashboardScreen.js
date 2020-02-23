import React from 'react';
import styled from 'styled-components';
import CButton from '../components/CButton';
import AppStyles from '../styles/AppStyles';
import * as helpers from '../Helpers';
import MapView,{Marker} from 'react-native-maps';
import * as FileSystem from 'expo-file-system';
import TitleHeader from '../components/TitleHeader';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import {ScrollView, Dimensions} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';

import { Notifications } from 'expo';

//var RNFS = require('react-native-fs');
const LOCATION_TASK_NAME = 'background-location-task';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class DashboardScreen extends React.Component { 
   constructor(props) {
    super(props);
	this.props.navigation.setParams({launchDrawer: this.launchDrawer});	
	//this.dt = props.navigation.state.params.dt;
	
	
    this.state = { 
                     hasLocationPermissions: false,
                     locationResult: null,
					 address: "",
                     markerCoords: {latitude: 0,longitude: 0},
					 region: {
                       latitude: LATITUDE,
                       longitude: LONGITUDE,
                       latitudeDelta: LATITUDE_DELTA,
                       longitudeDelta: LONGITUDE_DELTA,
                     },
	                 isLoadingComplete: false
				 };	
				 
	this.navv = null;
    
	
	this._getLocationAsync();
  }
  
    launchDrawer = () => {
	this.navv.toggleDrawer();  
  }
	  
  
  _testt = async () => {
	  const { status } = await Location.requestPermissionsAsync();
    if (status === 'granted') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      });
    }
  }
  
  _test = () => {
	 // this.navv.navigate('DisplayLatLng'); 
  }

  _getLocationAsync = async () => {
	  const { status } = await Location.requestPermissionsAsync();
    if (status === 'granted') {
      this.setState({ hasLocationPermissions: true });

      let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest});
	  let address = await helpers.getAddress({latitude: location.coords.latitude, longitude: location.coords.longitude});
	  console.log("Address: ",address);
      this.setState({ locationResult: JSON.stringify(location),  address: address.formatted_address});
      this.setState({ markerCoords: {
		     latitude: location.coords.latitude,
		     longitude: location.coords.longitude
		    }
			});
	  
      // Center the map on the location we just fetched.
      this.setState({
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    }
	else{
		showMessage({
			 message: "Locations permissions not granted",
			 type: 'warning'
		 });
	}
	this.setState({ isLoadingComplete: true});
  }
  
  _handleMapRegionChange = mapRegion => {
    this.setState({region: mapRegion });
  };
  
  _continue = () => {
	 //form validation
	  
  let validationErrors = (this.state.fname.length < 4 || this.state.lname.length < 4 || this.state.gender === "none");
	  if(validationErrors){
	 
	 if(this.state.fname.length < 4){
		 showMessage({
			 message: "Your first name is required",
			 type: 'danger'
		 });
	 }
	 if(this.state.lname.length < 4){
		 showMessage({
			 message: "Your first name is required",
			 type: 'danger'
		 });
	 }
	 
	 if(this.state.gender === "none"){
		 showMessage({
			 message: "Gender is required",
			 type: 'danger'
		 });
	 } 
	 
	}
	
	else{
	  this.dt.fname = this.state.fname;
	  this.dt.lname = this.state.lname;	  
	  this.dt.gender = this.state.gender;	  
	 
		this.navv.navigate('AddLogin',{
		   dt: this.dt
	    });
	}
	 
  }
  
  render() {
	 let navv = this.props.navigation;
	  this.navv = navv;
	  if(this.state.region !== null){
			console.log("current coords: ",this.state.markerCoords);
		  
	  }
    return (
	       <BackgroundImage source={require('../assets/images/bg.jpg')}>
	        <Container>	     

				   <Row style={{flex: 1, marginTop: 10, flexDirection: 'row', width: '100%'}}>
					  {this.state.isLoadingComplete ? (
				     <MapView 
					   style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height - 150}}
					   region={this.state.region}
                       onRegionChange={region => this._handleMapRegionChange(region)}
   				     >
				       <Marker
					      coordinate={this.state.markerCoords}
						  title="Your current location"
                          description={this.state.address}
					   />
					 </MapView>			   	
				   ) : (
					    <NoteView>
						  <Note>Loading..</Note>
						</NoteView>
					  )}
				   </Row>
				    <Row>
				    <TestView>
					  <TestText></TestText>
					</TestView>
				   </Row>
				   <Row style={{flex: 1,justifyContent: 'flex-end', width: '90%'}}>
				   <SubmitButton
				       onPress={() => {this._test()}}
				       title="Submit"
                    >
                        <CButton title="Test" background="rgb(101, 33, 33)" color="#fff" />					   
				    </SubmitButton>	
                    </Row>					
			</Container>
			</BackgroundImage>
    );
  }
  
}



const BackgroundImage = styled.ImageBackground`
           width: 100%;
		   height: 100%;
`;

const Container = styled.View`
					 background-color: #fff;
					flex: 1;
`;

const ProductInputWrapper = styled.View` 
                   margin-left: 10px;
`;

const ProductDescription = styled.Text` 
                   color: #000;
				   margin-top: 12px;
				   margin-bottom: 2px;
				   font-size: 24px;
				   
`;
					 
const ProductInput = styled.TextInput`
					 align-items: center;
					 border: 1px solid #bbb;
					 padding: 10px;
					 margin-top: 5px;
					 margin-bottom: 20px;
					 color: #000;
					 border-left-width: 0;
					 border-top-width: 0;
					 border-right-width: 0;
					 border-bottom-width: 3;
`;


const TestButton = styled.Button`
  background-color: blue;
  color: #fff;
  border-radius: 5;
  margin-top: 40px;
`;

const SubmitButton = styled.TouchableOpacity`

`;

const ImageUpload = styled.TouchableOpacity`

`;

const ContactUpload = styled.TouchableOpacity`

`;

const ContactView = styled.View`

`;

const ContactText = styled.Text` 
                   color: #fff;
				   background-color: green;
				   margin-bottom: 6px;
				   font-size: 16px;
				   padding: 8px;
`;
					 
const Logo = styled.Image`
           width: 66px;
		   height: 66px;
		   background: black;
		   border-radius: 33px;
		   margin-left: 8px;
`;

const Row = styled.View`
   margin: 5px;
   width: 100%;
`;

const TopRightInputs = styled.View`
   margin-left: 10px;
   margin-right: 5px;
   width: 60%;
`;

const CustomerSelect = styled.Picker`
    width: 90%;
	height: 50;
	color: #000;
	margin-bottom: 20px;
`;

const BottomInputs = styled.View`
   margin-top: 10px;
   margin-left: 10px;
   margin-bottom: 10px;
   width: 90%;
`;

const NoteView = styled.View`

`;

const TestView = styled.View`

`;

const TestText = styled.Text` 
                   color: rgb(101, 33, 33);
				   margin-bottom: 6px;
				   font-size: 16px;
				   padding: 8px;
`;

const Note = styled.Text` 
                   color: rgb(101, 33, 33);
				   margin-bottom: 6px;
				   font-size: 16px;
				   padding: 8px;
`;