import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Input from '../common/Input';
import Text from '../common/Text';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncome: 0,
      totalExpenses: 0,
      savingsPerMonth: 0
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.blankView} />
          <View style={styles.displayContainer}>
            <Text>Total Income: {this.state.totalIncome}</Text>
            <Text>Total Expenses: {this.state.totalExpenses}</Text>
            <Text>Savings per month: {this.state.savingsPerMonth}</Text>
          </View>
          <View style={styles.formContainer} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  blankView: {
    padding: 20
  },
  displayContainer: {
    alignItems: 'center'
  },
  formContainer: {
    alignItems: center
  }
});
