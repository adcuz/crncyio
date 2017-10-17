import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';
import color from 'color';

const InputWithButton = (props) => {
  const {
    onPress, buttonText, editable = true, textColor = null,
  } = props;

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonTextStyles = [styles.buttonText];
  if (textColor) {
    buttonTextStyles.push({
      color: textColor,
    });
  }

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
};

InputWithButton.PropTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.text,
  editable: PropTypes.bool,
};

export default InputWithButton;
