import {StackNavigator} from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import ChordList from '../Screens/ChordList';
import GameScreen from '../Screens/GameScreen';
import GameChoose from '../Screens/GameChoose';
import TunerApp from '../Screens/TuneApp';

const RootNavigator = StackNavigator({

  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null },
  },
  Chords: {
    screen: ChordList,
    navigationOptions: {
      headerTitle: 'Chord List',
      headerTitleStyle: { flex: 1, flexDirection: 'row', textAlign: 'center', marginLeft: -30 },
    }
  },
  Game: {
    screen: GameScreen,
    navigationOptions: {
      headerTitle: 'Game',
      headerTitleStyle: { flex: 1, flexDirection: 'row', textAlign: 'center', marginLeft: -30 },
    }
  },
  GamePicker: {
    screen: GameChoose,
    navigationOptions: {
      headerTitle: 'Pick a Game',
      headerTitleStyle: { flex: 1, flexDirection: 'row', textAlign: 'center', marginLeft: -30 },
    }
  },
  Tuner: {
    screen: TunerApp,
    navigationOptions: {
      headerTitle: 'Tune up',
      headerStyle: { marginTop: 20 },
      headerTitleStyle: { flex: 1, flexDirection: 'row', textAlign: 'center', marginLeft: -30 },
    }
  }

});

export default RootNavigator;