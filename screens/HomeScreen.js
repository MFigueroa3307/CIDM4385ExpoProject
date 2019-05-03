import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    
    return (
      
      <ImageBackground source={{uri:'http://edsigcon.org/assets/img/cleveland1.jpg'}} style={{width: '100%', height: '100%'}}>

      <View style={styles.container}>
      
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>

              <Text style={styles.codeHeaderText}>EDSIGCON | CONISAR 2019</Text>

              
              <MonoText style={styles.codeHeaderText2}>Wednesday, Nov.6 — Saturday, Nov.9</MonoText>

              <Image
              source={
                __DEV__
                  ? require('../assets/images/cleveland.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
            

            
          </View>

          <View style={styles.getStartedContainer}>
        

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText style={styles.getStartedText}>Peer-reviewed conferences focusing on Information Systems & Computing Education and Information Systems Applied Research inviting scholarly work including research papers, case studies, abstracts and workshop/panel proposals.
          </MonoText>
            </View>
            
            {/* <Text style={styles.getStartedText}>
            Peer-reviewed conferences focusing on Information Systems & Computing Education and Information Systems Applied Research inviting scholarly work including research papers, case studies, abstracts and workshop/panel proposals.

            
            </Text> */}
            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText style={styles.getStartedText}>EDSIG Conference on Information Systems & Computing Education - 
            Serving Academic Professionals and Institutions of Higher Learning
            Scholarly work focusing on (but not limited to) pedagogy, model curriculum, and education innovation in data analytics, cybersecurity, app development, software engineering, etc.
            </MonoText>
            </View>
            {/* <Text style={styles.getStartedText}>
            EDSIG Conference on Information Systems & Computing Education
            Serving Academic Professionals and Institutions of Higher Learning
            Scholarly work focusing on (but not limited to) pedagogy, model curriculum, and education innovation in data analytics, cybersecurity, app development, software engineering, etc.
            </Text> */}
            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText style={styles.getStartedText}>Conference on Information Systems Applied Research - 
            Serving Academic Professionals, Practitioners and the IT Industry
            Research focusing on (but not limited to) data analytics, IS Management, cybersecurity, data privacy, big data management, cloud and virtualization, IS strategy, ethical issues, etc.
            </MonoText>
            </View>
            {/* <Text style={styles.getStartedText}>
            Conference on Information Systems Applied Research - 
            Serving Academic Professionals, Practitioners and the IT Industry
            Research focusing on (but not limited to) data analytics, IS Management, cybersecurity, data privacy, big data management, cloud and virtualization, IS strategy, ethical issues, etc.
            </Text> */}
          </View>

        </ScrollView>

        <View style={{flexDirection:"row"}}>
          <View style={styles.button}>
            <Image
              source={{
                uri:          'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png',
              }}
              style={styles.imagestyle}
            />
            </View>
            <View style={styles.button}>
            <Image
              source={{
                uri:
                  'http://www.stickpng.com/assets/images/58e9196deb97430e819064f6.png',
              }}
              style={styles.imagestyle}
            />
            </View>
            <View  style={styles.button}>
            <Image
              source={{
                uri:           'https://pngimage.net/wp-content/uploads/2018/06/instagram-icon-png-circle-9.png',
              }}
              style={styles.imagestyle}
            />
            </View>
            </View>

        
      </View>
      </ImageBackground>
    );
  }

  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );

  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use useful development
  //         tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#008000',
  },
  developmentModeText: {
    marginBottom: 20,
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    paddingTop: 30,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHeaderText: {
    fontSize: 24,
    color: '#F09F0B',
    lineHeight: 24,
    textAlign: 'center',
  },
  codeHeaderText2: {
    fontSize: 20,
    color: '#F09F0B', 
    lineHeight: 24,
    textAlign: 'center',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.50)',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  getStartedText: {
    fontSize: 17,
    color: '#ffffff',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  ImageBackground: {
    flex: 1,
    width: null,
    height: null,
},
imagestyle: {
  padding: 10,
  margin: 5,
  height: 30,
  width: 30,
  alignItems: 'center',
  justifyContent: 'center',
},
button: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F09F0B',
  height: 40,
  margin: 10,
  borderWidth: 1,
  borderColor: '#F09F0B',
  borderRadius: 20,
},
});
