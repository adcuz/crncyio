import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Icon extends React.Component {
  urg = () => {
    console.log('lolllll');
  };

  render() {
    const iconStyles = [styles.icon];
    if (this.props.visible) {
      iconStyles.push(styles.iconVisible);
    }

    if (this.props.backgroundColor) {
      iconStyles.push({
        backgroundColor: this.props.backgroundColor,
      });
    }

    return (
      <View style={iconStyles} onPress={this.urg}>
        {this.props.checkmark ? (
          <Image
            style={styles.checkIcon}
            source={require('./images/check.png')}
            resizeMode="contain"
          />
        ) : null}
      </View>
    );
  }
}

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default Icon;
