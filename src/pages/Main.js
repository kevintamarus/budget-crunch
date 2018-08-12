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
      savingsPerMonth: 0,

      weeklyIncome: 0,
      workIncome: 0
    };
  }

  handleChangeInput = input => {
    console.log(input, 'input');
  };

  render() {
    const { totalIncome, totalExpenses, savingsPerMonth, weeklyIncome, workIncome } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.blankView} />
          <View style={styles.displayContainer}>
            <Text>Total Income: {this.state.totalIncome}</Text>
            <Text>Total Expenses: {this.state.totalExpenses}</Text>
            <Text>Savings per month: {this.state.savingsPerMonth}</Text>
          </View>
          <View style={styles.incomeFormContainer}>
            <Input
              label="Weekly"
              name={weeklyIncome}
              value={weeklyIncome}
              onChangeText={this.handleChangeInput}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  blankView: {
    padding: 20
  },
  displayContainer: {
    alignItems: 'center'
  },
  incomeFormContainer: {
    alignItems: 'center'
  },
  expenseFormContainer: {
    alignItems: 'center'
  }
});
