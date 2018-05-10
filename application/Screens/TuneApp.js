import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Tuner from '../Config/tuner';
import Note from '../Config/note';
import Meter from '../Config/meter';


export default class TuneApp extends Component {
  state = {
    note: {
      name: 'A',
      octave: 4,
      frequency: 440,
    },
  }

  _update(note) {
    this.setState({note})
  }

  componentWillMount() {
    const tuner = new Tuner();
    tuner.start();
    tuner.onNoteDetected = note => {
      if (this._lastNoteName === note.name) {
        this._update(note)
      } else {
        this._lastNoteName = note.name
      }
    }
  }

  render() {
    return (
    <ImageBackground source={require('../Resources/Images/other_page.jpg')} style={style.backgroundImage}>
    <View style={style.body}>
      <StatusBar backgroundColor='#000' translucent/>
      <Meter cents={this.state.note.cents}/>
      <View style={{ marginLeft: 30 }}>
      <Note {...this.state.note}/>
      <Text style={style.frequency}>{this.state.note.frequency.toFixed(1)} Hz</Text>
      </View>
    </View>
    </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frequency: {
    fontSize: 28,
    color: '#37474f',
  },
  backgroundImage: {
    height: '100%',
  }
})