import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DangerZone } from 'expo';

const { Lottie } = DangerZone;

class AnimationDemo extends React.Component {
  static propTypes = {};

  state = {
    animation: null,
  };

  componentWillMount() {
    this.playAnimation();
  }

  playAnimation = () => {
    if (!this.state.animation) {
      this.loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  loadAnimationAsync = async () => {
    const result = await fetch('https://cdn.rawgit.com/airbnb/lottie-react-native/635163550b9689529bfffb77e489e4174516f1c0/example/animations/LottieWalkthrough.json');

    this.setState({ animation: JSON.parse(result._bodyText) }, this.playAnimation);
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        {this.state.animation && (
          <Lottie
            ref={(animation) => {
              this.animation = animation;
            }}
            style={styles.lottieAnimator}
            source={this.state.animation}
          />
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.playAnimation}>
            <Ionicons name="ios-recording" style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  lottieAnimator: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  buttonIcon: {
    fontSize: 30,
    color: '#ccc',
  },
});

export default AnimationDemo;
