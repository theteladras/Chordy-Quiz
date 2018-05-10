import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class ChordListItem extends React.Component{
  constructor(props){
    super(props);
  }

  play (){
    this.props.playChord(this.props.id);
  };


  render(){
    return(
      <View>
      <Card containerStyle={ styles.container }><View style={{ flexDirection: "row" }}>
        <Image source={this.props.imageSource} style={{height:90, width:90}}/>
        <Text style={[styles.chordName, { fontWeight: 'bold' }]}>{this.props.chordName.substr(0)}</Text><Text style={[styles.chordName, { marginRight: -10 }]}>{this.props.chordName.substr(1,-1)}</Text>
        <View style={{ alignSelf: 'center', marginRight: 10 }} >
          <Button 
          title='play'
          onPress={() => this.play()  } 
          disabled={this.props.disableBtn} 
          borderRadius={120}
          textStyle={{ marginTop: -5 }}
          buttonStyle={styles.buttonStyle}
          disabledStyle={{ backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 120 }}
          />
        </View>
        </View>
      </Card>
      <View style={{ height: 10, backgroundColor: 'transparent' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(100,100,100,0.3)',
    borderRadius: 10,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  chordName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 30,
    fontWeight: 'normal'
  },
  buttonStyle: {
    backgroundColor: 'orange', 
    justifyContent: 'center',
  }
});