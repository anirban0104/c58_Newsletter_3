import * as React from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HoroScopeScreen extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={{
          marginTop:75,
          marginLeft:50,
          marginRight:50
        }}>
 Join Anirban.com to know your horoscope 
        </Text>
      </View>
    )
  }
}