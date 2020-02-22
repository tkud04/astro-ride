import React from 'react';
import styled from 'styled-components';
import CButton from '../components/CButton';
import AppInputImageHeader from '../components/AppInputImageHeader';
import AppStyles from '../styles/AppStyles';
import * as helpers from '../Helpers';
import * as FileSystem from 'expo-file-system';
import TitleHeader from '../components/TitleHeader';
import * as Permissions from 'expo-permissions';
import {ThemeContext,UserContext} from '../MyContexts';
import {ScrollView} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';

import { Notifications } from 'expo';

//var RNFS = require('react-native-fs');

export default class SignoutScreen extends React.Component { 
   constructor(props) {
    super(props);
	//this.props.navigation.setParams({goBack: () => {this.props.navigation.goBack()}});
	
    this.state = { phoneBorderBottomColor: '#000',				  
				   loading: false,
				   phone: "",			 
				 };	
				 
	this.navv = null;
    
  }
	  
  
  
  
 _signout = (uu,upp) => {

		this.state.loading = true;
	 
	 //console.log(dt);
	 
	 showMessage({
			 message: "Signing you out..",
			 type: 'info'
		 });
		 
		upp([{},""]);
		
     //Log user in
	 /**
		        helpers.logout((res) => {
					
					if(res.status == "ok"){						
                       upp([{},""]);
                        						
					}
					else{
						showMessage({
			              message: `Username or password incorrect, please try again.`,
			              type: 'danger'
		                });
					}
					this.state.loading = false;
				});	
	**/
	 
  }
  
  render() {
	 let navv = this.props.navigation;
	  this.navv = navv;
    return (
	        <Container>	     
 <ScrollView>		     
				   <Row style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'column',marginTop: 20}}>			   
				   <Logo source={require('../assets/images/bg.jpg')}/>	
                    <TitleHeader bc="red" tc="red" title="NOTE: Make sure you sync your data with our servers so as to avoid permanent loss of your data when you sign out."/>									   
                   </Row>
                  
				  <Row style={{flex: 1,justifyContent: 'flex-end', width: '90%'}}>
				  <UserContext.Consumer>
					  {({user,up}) => (
				   <SubmitButton
				       onPress={() => {this._signout(user, up)}}
				       title="Submit"
                    >
                        <CButton style={{width: '100%'}} title="Sign out" background="rgb(101, 33, 33)" color="#fff" />					   
				    </SubmitButton>	
					)}
					   </UserContext.Consumer>	
                    </Row>		
					
			  </ScrollView>
			</Container>
    );
  }
  
}

const BackgroundImage = styled.ImageBackground`
           width: 100%;
		   
		   height: 100%;
`;

const Container = styled.View`
					 background-color: #fff;
					 margin-top: ${AppStyles.headerHeight - 34}px;
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