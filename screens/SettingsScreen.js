/* We took code from https://snack.expo.io/rJKf989EV , The purpose of this code is provide a button with a link to google maps. The user will be able
to click the link and google maps will be set up to the coordinants of the hotel that the convention is being hosted at. */

import getDirections from 'react-native-google-maps-directions';
import React, { Component } from 'react';
import { View, Button, Alert, StyleSheet, ImageBackground } from 'react-native';
 
export default class SettingsScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  
 
  handleGetDirections = () => {
    const data = {
       source: {
        latitude: 41.4986,
        longitude: -81.6945
      },
      destination: {
        latitude: 41.4986,
        longitude: -81.6945
      },
      
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode 
        }
      ]
    }
 
    getDirections(data)
  }
 
  render() {
    return (
      <ImageBackground source={{uri:'http://edsigcon.org/assets/img/renaissance4.jpg'}} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Button onPress={this.handleGetDirections} title="Directions to hotel" />
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});