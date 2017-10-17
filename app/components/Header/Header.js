import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = ({ onPress }) => (
  <View style={styles.container} zIndex={2}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.icon} resizeMode="contain" source={require('./images/gear.png')} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  onPress: PropTypes.func,
};

export default Header;
