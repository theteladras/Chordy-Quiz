import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'


export default class GameChoose extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('../Resources/Images/other_page.jpg')} style={styles.backgroundImage}>
        <View style={{flex: 1, marginTop: 20, marginBottom: 20}}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
              style={ styles.btnContainer }
              onPress={() => navigate('Game', {q: 10})}
            >
              <Text style={styles.textStyle}>Short run</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, paddingTop: 10, alignItems: 'center'}}>
            <TouchableOpacity
              style={ styles.btnContainer }
              onPress={() => navigate('Game', {q: 20})}
            >
              <Text style={styles.textStyle}>Long run</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    borderColor:'transparent',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'orange',
    borderRadius:100,
    alignSelf: 'center',
  },
  backgroundImage: {
    height: '100%',
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});