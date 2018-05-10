import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';


export default class HomeScreen extends React.Component {

  state = { orientation: 'PORT' };

  render() {
    const {navigate} = this.props.navigation;
    return ( 
      <ImageBackground source={require('../Resources/Images/home_background.jpg')} style={styles.backgroundImage}>
      <View style={[styles.pageContainer, {  flexDirection: this.state.orientation == 'PORT' ? 'column' : 'row', }]} onLayout={event => { event.nativeEvent.layout.height > event.nativeEvent.layout.width ? this.setState({ orientation: 'PORT' }) : this.setState({ orientation: 'LAND' }) }}>
      <View style={[styles.logoContainer, {  marginTop: this.state.orientation == 'PORT' ? 50 : '16%', }]}>
        <Image source={require('../Resources/Images/logo.png')} style={[styles.logo, {
           width: this.state.orientation == 'PORT' ? 280 : 280,
           marginTop: this.state.orientation == 'PORT' ? -40 : -40, 
           }]} />
      </View>
      <View style={styles.buttonsWrap}>
        <View style={styles.buttonContainer}>
          <Button
            large
            icon={{name: 'arrow-right', type: 'octicon', buttonStyle: styles.someButtonStyle }}
            title='Game'
            backgroundColor="#262626"
            raised={true}
            underlayColor="yellow"
            borderRadius={40}
            fontSize={20}
            textStyle={{ marginTop: -5 }}
            onPress={() => navigate('GamePicker')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            large
            icon={{name: 'note', type: 'octicon'}}
            title='Chords'
            backgroundColor="#262626"
            raised={true}
            underlayColor="yellow"
            borderRadius={40}
            fontSize={20}
            textStyle={{ marginTop: -5 }}
            onPress={() => navigate('Chords')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            large
            icon={{name: 'bell', type: 'octicon'}}
            title='Tune'
            backgroundColor="#262626"
            raised={true}
            underlayColor="yellow"
            borderRadius={40}
            fontSize={20}
            textStyle={{ marginTop: -5 }}
            onPress={() => navigate('Tuner')}
          />
        </View>
      </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  logoContainer: {
    height: 110,
    marginTop: 50,
    marginHorizontal: 45,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  logo: {
    marginTop: -40,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  buttonsWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  buttonContainer: {
    flex: 0.7,
    padding: 10,
    justifyContent: 'center',
    width: 200,
  },
  backgroundImage: {
    height: '100%',
  },
  chordsBtn: {
    borderWidth: 5,
    borderRadius: 20,
    padding: 0,
    color: 'black',
  }
});