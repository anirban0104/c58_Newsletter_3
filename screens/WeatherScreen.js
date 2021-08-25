import * as React from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class WeatherScreen extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={{
          marginTop:75,
          marginLeft:50,
          marginRight:50
        }}>
       Today's Weather report from Kolkata: People are advised not to go out as it is blazing hot outside reacing upto 50degree celsius. 
        </Text>
      </View>
    )
  }
}