import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Input from '../common/Input';
import Text from '../common/Text';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncome: `$ 0`,
      totalExpenses: `$ 0`,
      savingsPerMonth: `$ 0`,

      weeklyIncome: '0'
    };
  }

  handleChangeInput = (input, weeklyIncome) => {
    this.setState({ [weeklyIncome]: input }, this.calculateIncome);
  };

  calculateIncome = () => {
    const totalIncome = `$ ${((this.state.weeklyIncome / 5) * 22).toFixed(2)}`;
    this.setState({ totalIncome });
  };

  render() {
    const { totalIncome, totalExpenses, savingsPerMonth, workIncome, weeklyIncome } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.blankView} />
          <View style={styles.displayContainer}>
            <Text>Total Income: {totalIncome}</Text>
            <Text>Total Expenses: {totalExpenses}</Text>
            <Text>Savings per month: {savingsPerMonth}</Text>
          </View>
          <Text>Income</Text>
          <View style={styles.incomeFormContainer}>
            <Input
              label="Weekly"
              value={weeklyIncome}
              selectTextOnFocus
              onChangeText={input => this.handleChangeInput(input, 'weeklyIncome')}
            />
          </View>
          <Text>Expenses</Text>
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
