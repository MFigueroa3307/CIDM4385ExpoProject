// We took this code from https://snack.expo.io/rkeH0IaMN, the purpose of this code is provide FAQ screen in nav bar.
// The User should able to visit FAQ when they click FAQ on nav bar. 
// 

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';
import {FAQ,Question} from '../components/Question';

// define bullets
const bullets = [
  'Whats the price of admission?',
  'Whats transportation like?',
  'Where can I eat?',
  'or give me more ideas!'
]
// define an action
const action_example = () => {
  WebBrowser.openBrowserAsync(
      'https://github.com/'
    );
}
// the link which is open webBrowser
const goTo = (link) => {
  WebBrowser.openBrowserAsync(
      link
    );
}
// list FAQ questions on page also set click link
const questions = [
      {
        question:"How can I help you?",
        reply:"You have several options to choose:",
        bullets: bullets ,
        actionText:"I'm ready to help!",
        onClick: action_example
      },
      {
        question : "Don't you know how to start?",
        reply : "Open a slack account and chat with the team",
        actionText : "Sure! Take me there!",
        onClick : () => goTo('https://slack.com/'),
      }
    ]

// connect with components Qustion.js files and how text formal will show in app
export default class FAQScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
           
        <View>
          <Text style={{textAlign: 'center'}}></Text>
          
          <FAQ 
            title='F.A.Q.'
            questions={questions}
          />

        </View>
        
        
      </View>
    );
  }
}
// specific format parameter
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#bdbdbd',
    padding: 8,
  }
});
