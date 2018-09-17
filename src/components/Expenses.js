import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Button from 'common/Button.js';
import AmountCard from 'common/AmountCard';
import Text from 'common/Text';

class Expenses extends React.Component {
  state = {
    expenseItems: []
  };

  _addExpenseItem = (description, amount) => {
    const expenseItems = this.state.expenseItems;
    expenseItems.push({
      component: <AmountCard />,
      description,
      amount
    });
    this.setState({ expenseItems });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Expenses</Text>
          <View style={styles.addButton}>
            <Icon name="plus" type="material-community" onPress={this._addExpenseItem} />
          </View>
        </View>
        <View style={styles.itemsContainer}>
          {this.state.expenseItems.map((item, i) => (
            <AmountCard key={i} />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: '100%'
  },
  titleContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    textDecorationLine: 'underline'
  },
  addButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#a3a3a3',
    borderWidth: 1,
    borderRadius: 100
  },
  itemsContainer: {
    flex: 1
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1
  }
});

export default Expenses;
