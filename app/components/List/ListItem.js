import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text,
  onPress,
  selected = false,
  selectedBackgroundColor = null,
  checkmark = true,
  visible = true,
  customIcon = null,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon checkmark={checkmark} backgroundColor={selectedBackgroundColor} visible={visible} />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  selectedBackgroundColor: PropTypes.string,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
};

export default ListItem;
