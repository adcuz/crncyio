import React from 'react';
import { View, Text, Keyboard, Animated, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const KEYBOARD_ANIMATION_DURATION = 100;

class Logo extends React.Component {
  static propTypes = {
    tintColor: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: KEYBOARD_ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: KEYBOARD_ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: KEYBOARD_ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: KEYBOARD_ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.background,
      {
        width: this.containerImageWidth,
        height: this.containerImageWidth,
      },
    ];
    const logoImageStyle = [
      styles.logo,
      {
        width: this.imageWidth,
      },
    ];
    if (this.props.tintColor) {
      logoImageStyle.push({ tintColor: this.props.tintColor });
    }
    return (
      <View style={styles.container}>
        <Animated.Image
          style={containerImageStyle}
          source={require('./images/background.png')}
          resizeMode="contain"
        >
          <Animated.Image
            style={logoImageStyle}
            source={require('./images/logo.png')}
            resizeMode="contain"
          />
        </Animated.Image>
        <Text style={styles.text}>Crncy.io</Text>
      </View>
    );
  }
}

export default Logo;
