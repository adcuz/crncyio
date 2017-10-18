import React from 'react';
import { Platform, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import Navigator from '../../config/routes';

class NavigateContainer extends React.Component {
  componentWillMount() {
    if (Platform.OS !== 'android') return;
    BackHandler.addEventListener('hardwareBackPress', () => this.handleBackPress());
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') BackHandler.removeEventListener('hardwareBackPress');
  }

  handleBackPress() {
    if (this.isRootScreen(this.props.nav)) return false;

    this.props.dispatch(NavigationActions.back());

    return true;
  }

  isRootScreen(navigator) {
    if (navigator.index == null) {
      return true;
    }

    if (navigator.index > 0) {
      return false;
    }

    return !navigator.routes || !navigator.routes.find(route => !this.isRootScreen(route));
  }

  render() {
    const { dispatch, nav: state } = this.props;
    return <Navigator navigation={addNavigationHelpers({ dispatch, state })} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(NavigateContainer);
