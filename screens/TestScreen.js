import React,{useState, useEffect, useCallback, useRef} from 'react';
import styled from 'styled-components';
import CButton from '../components/CButton';
import AppStyles from '../styles/AppStyles';
import * as helpers from '../Helpers';
import SvgIcon from '../components/SvgIcon';
import TitleHeader from '../components/TitleHeader';
import {ScrollView, Dimensions, ActivityIndicator, Animated} from 'react-native';
import {ThemeContext,UserContext} from '../MyContexts';
import {showMessage, hideMessage} from 'react-native-flash-message';

import { Notifications } from 'expo';

const { width, height } = Dimensions.get('window');
 
  
  const _launchDrawer = () => {
	navv.toggleDrawer();  
  }
  
  
  const _takeSnapshot = () => {
	if(map.current !== null && viewShot.current !== null){
		  /**
		  const snapshot = this.map.takeSnapshot({
			  result: 'base64'
		  });
		  **/
		  const snapshot = viewShot.current.capture();
		  snapshot.then((uri) => {dt.snapshot = uri});
		 
	  }   
  }
  

const TestScreen = (props) =>  { 
   
	u = props.route.params.u;
	navv = props.navigation;
	
	
	const [fadeAnim] = useState(new Animated.Value(0));
	
	
    useEffect(() => {	
	Animated.timing(fadeAnim,{
		toValue: 1,
		duration: 5000
	})
	.start();
   },[]);
   
	
    return (
	 <UserContext.Consumer> 
   {({user,up,loggedIn}) => (
	        <Container>	     
					 <Row style={{flex: 1, marginTop: 10, marginLeft: 50,  alignContent: 'center', justifyContent: 'center', width: '100%'}}>
					   <Animated.View
                        style={{backgroundColor: 'rgb(101, 33, 33)', width: 250, height: 50, opacity: fadeAnim}}
                       >
                         <LoadingText>Fading soon</LoadingText>
                       </Animated.View>
					 </Row>
			</Container>
		 )}
   </UserContext.Consumer>
    );  

}

export default TestScreen;
  
  
  const BackgroundImage = styled.ImageBackground`
           width: 100%;
		   height: 100%;
`;

const Container = styled.View`
					 background-color: #fff;
					flex: 1;
					justify-content: flex-end;
`;


const Row = styled.View`
   margin: 5px;
   width: 100%;
`;

const LoadingText = styled.Text`
   font-size: 28px;
   text-align: center;
   margin: 10px;
   color: #fff;
`;

