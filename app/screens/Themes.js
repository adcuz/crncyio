import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class Themes extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  };

  handleThemePress(color) {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          selectedBackgroundColor={styles.$blue}
          onPress={() => this.handleThemePress(styles.$blue)}
          selected
          checkmark={false}
        />
        <Separator />
        <ListItem
          text="Orange"
          selectedBackgroundColor={styles.$orange}
          onPress={() => this.handleThemePress(styles.$orange)}
          selected
          checkmark={false}
        />
        <Separator />
        <ListItem
          text="Green"
          selectedBackgroundColor={styles.$green}
          onPress={() => this.handleThemePress(styles.$green)}
          selected
          checkmark={false}
        />
        <Separator />
        <ListItem
          text="Purple"
          selectedBackgroundColor={styles.$purple}
          onPress={() => this.handleThemePress(styles.$purple)}
          selected
          checkmark={false}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connect()(Themes);
