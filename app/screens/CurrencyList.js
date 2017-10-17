import React from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import currencyList from '../data/currencies';
import { setBaseCurrency, setQuoteCurrency } from '../actions/currencies';
import { ListItem, Separator } from '../components/List';

class CurrencyList extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string,
  };

  handlePress = (item) => {
    switch (this.props.navigation.state.params.type) {
      case 'base':
        this.props.dispatch(setBaseCurrency(item));
        this.props.navigation.goBack(null);
        break;
      case 'quote':
        this.props.dispatch(setQuoteCurrency(item));
        this.props.navigation.goBack(null);
        break;
      default:
        this.props.navigation.goBack(null);
    }
  };

  render() {
    let currentCurrency;
    switch (this.props.navigation.state.params.type) {
      case 'base':
        currentCurrency = this.props.baseCurrency;
        break;
      case 'quote':
        currentCurrency = this.props.quoteCurrency;
        break;
      default:
        currentCurrency = null;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencyList}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === currentCurrency}
              onPress={() => this.handlePress(item)}
              selectedBackgroundColor={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;

  return {
    baseCurrency,
    quoteCurrency,
    primaryColor: state.theme.primaryColor,
  };
};

export default connect(mapStateToProps)(CurrencyList);
