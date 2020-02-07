import React from 'react';
import styled from 'styled-components';
import CButton from '../components/CButton';
import AppInputImageHeader from '../components/AppInputImageHeader';
import AppStyles from '../styles/AppStyles';
import * as helpers from '../Helpers';
import * as FileSystem from 'expo-file-system';
import TitleHeader from '../components/TitleHeader';
import * as Permissions from 'expo-permissions';
//import * as SMS from 'expo-sms';
import {ScrollView} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';

import { Notifications } from 'expo';

//var RNFS = require('react-native-fs');

export default class AddLoginScreen extends React.Component { 
   constructor(props) {
    super(props);
	this.props.navigation.setParams({goBack: () => {this.props.navigation.goBack()}});
	this.dt = props.navigation.state.params.dt;
	
    this.state = { emailBorderBottomColor: '#000',
	               passwordBorderBottomColor: '#000',				  
	               confirmPasswordBorderBottomColor: '#000',				  
				   loading: false,
				   email: "",			 
				   password: "",			 
				   confirmPassword: "none"                				   
				 };	
				 
	this.navv = null;
    
  }

  static navigationOptions = ({navigation}) => {
	   return {
	   headerStyle: {
		   backgroundColor: AppStyles.headerBackground,
		   height: AppStyles.headerHeight
	   },
	   headerTitle: () => <AppInputImageHeader xml={AppStyles.svg.headerPhone}  leftParam = "goBack" navv = {navigation} title="Sign up" subtitle="Email and password"  sml={30}/>,
	   headerTintColor: AppStyles.headerColor,
	   headerTitleStyle: {
		   
       },
	   headerLeft: null,
	   }
   
    };
	  
  
  
  
  _continue = () => {
	 //form validation
	  
  let validationErrors = (this.state.email.length < 6 || this.state.password.length < 6 || this.state.password !== this.state.confirmPassword);
	  if(validationErrors){
	 
	 if(this.state.email.length < 6){
		 showMessage({
			 message: "A valid email address is required",
			 type: 'danger'
		 });
	 }
	 if(this.state.password.length < 6){
		 showMessage({
			 message: "Password must be at least 6 characters",
			 type: 'danger'
		 });
	 }
	 
	 if(this.state.password !== this.state.confirmPassword){
		 showMessage({
			 message: "Passwords don't match",
			 type: 'danger'
		 });
	 } 
	 
	}
	
	else{
	  this.dt.email = this.state.email;
	  this.dt.password = this.state.password;	  
	  
	  console.log("this.dt: ",this.dt);
	  /**
		this.navv.navigate('AddLogin',{
		   dt: this.dt
	    });
	  **/
	}
	 
  }
  
  render() {
	 let navv = this.props.navigation;
	  this.navv = navv;
    return (
	       <BackgroundImage source={require('../assets/images/bg.jpg')}>
		   <ScrollView>
	        <Container>	     
                 
				   <Row style={{flex: 1, marginTop: 10}}>
				     <ProductInputWrapper>
					 <ProductDescription>Email address</ProductDescription>
				    <ProductInput
					style={{borderColor: this.state.emailBorderBottomColor,width: '70%'}}
				     placeholder="Email address"
				     onChangeText={text => {
						this.setState({email: text});
					 }}
					 onFocus={() => {
						 
						this.setState({emailBorderBottomColor: "#00a2e8"});
					 }}
					 onBlur={() => {
						
						this.setState({emailBorderBottomColor: "#000"});
					 }}
					/>
					</ProductInputWrapper>
					<ProductInputWrapper>
					 <ProductDescription>Password</ProductDescription>
				    <ProductInput
					style={{borderColor: this.state.passwordBorderBottomColor,width: '70%'}}
				     placeholder="Password"
				     onChangeText={text => {
						this.setState({password: text});
					 }}
					 onFocus={() => {
						 
						this.setState({passwordBorderBottomColor: "#00a2e8"});
					 }}
					 onBlur={() => {
						
						this.setState({passwordBorderBottomColor: "#000"});
					 }}
					  secureTextEntry={true}
					/>
					</ProductInputWrapper>
					<ProductInputWrapper>
					 <ProductDescription>Confirm password</ProductDescription>
				    <ProductInput
					style={{borderColor: this.state.confirmPasswordBorderBottomColor,width: '70%'}}
				     placeholder="Confirm password"
				     onChangeText={text => {
						this.setState({confirmPassword: text});
					 }}
					 onFocus={() => {
						 
						this.setState({confirmPasswordBorderBottomColor: "#00a2e8"});
					 }}
					 onBlur={() => {
						
						this.setState({confirmPasswordBorderBottomColor: "#000"});
					 }}
					  secureTextEntry={true}
					/>
					</ProductInputWrapper>
				   </Row>
				   
				  
				   <Row style={{flex: 1,justifyContent: 'flex-end', width: '90%'}}>
				   <SubmitButton
				       onPress={() => {this._continue()}}
				       title="Submit"
                    >
                        <CButton title="Submit" background="rgb(101, 33, 33)" color="#fff" />					   
				    </SubmitButton>	
                    </Row>					
			</Container>
			</ScrollView>
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
				   font-size: 14px;
				   
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