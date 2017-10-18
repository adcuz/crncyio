import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Settings from '../screens/Settings';
import Themes from '../screens/Themes';
import AnimationDemo from '../screens/AnimationDemo';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        headerTitle: 'Settings',
      },
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
    AnimationDemo: {
      screen: AnimationDemo,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const Navigator = StackNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        header: null,
      },
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);

export default Navigator;
