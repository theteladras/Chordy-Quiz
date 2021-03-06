import React from 'react';
import { Text, FlatList, ImageBackground } from 'react-native';
import ChordListItem from '../Components/ChordListItem';
import Sound from 'react-native-sound';

import Chords from '../Config/Chords';

export default class ChordList extends React.Component {

  constructor(props) {
    super(props);

    this.samples = [];

    for (var i = 0; i < Chords.length; i++) {
      this.samples.push(new Sound(Chords[i].sample, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        
      }));
    }
  }

  _keyExtractor = (item, index) => item.id;

  _playChord(idd) {
    this.samples[idd].play();
  }
  
  componentWillUnmount(){
    for(let i = 0; i < this.samples.length; i++){
      this.samples[i].release();
    }
  }

  render() {
    return (
      <ImageBackground source={require('../Resources/Images/other_page.jpg')} style={styles.backgroundImage}>
      <FlatList
        data={Chords}
        keyExtractor={this._keyExtractor}
        renderItem={
          ({ item }) => <ChordListItem
            imageSource={item.image}
            chordName={item.name}
            id={item.id}

            playChord={(id) => this._playChord(id)}
          />
        }
      />
      </ImageBackground>
    );
  }
}

const styles = {
  backgroundImage: {
    height: '100%',
  }
};