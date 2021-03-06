import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View } from 'react-native';

import AmountCard from '../common/AmountCard';
import Input from '../common/Input';
import Text from '../common/Text';

import BudgetDisplay from '../components/BudgetDisplay';
import Expenses from 'components/Expenses';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncome: 0,
      totalExpenses: 0,
      savings: 0,

      weeklyIncome: '0',

      rentExpenses: '0',
      carExpenses: '0',
      foodExpenses: '0',
      spendingExpenses: '0'
    };
  }

  handleChangeInput = (input, weeklyIncome) => {
    this.setState({ [weeklyIncome]: input }, this.calculateIncome);
  };

  calculateIncome = () => {
    const totalIncome = (this.state.weeklyIncome / 5) * 22;
    this.setState({ totalIncome }, this.calculateExpenses);
  };

  calculateExpenses = () => {
    const { rentExpenses, carExpenses, foodExpenses, spendingExpenses } = this.state;
    const totalExpenses =
      (parseInt(rentExpenses) || 0) +
      (parseInt(carExpenses) || 0) +
      (parseInt(foodExpenses) || 0) +
      (parseInt(spendingExpenses) || 0);
    this.setState({ totalExpenses }, this.calculateSavings);
  };

  calculateSavings = () => {
    const savings = parseInt(this.state.totalIncome) - parseInt(this.state.totalExpenses);
    this.setState({ savings });
  };

  render() {
    const {
      totalIncome,
      totalExpenses,
      savings,
      weeklyIncome,
      rentExpenses,
      carExpenses,
      foodExpenses,
      spendingExpenses
    } = this.state;
    return (
      <SafeAreaView style={styles.safeViewContainer}>
        <BudgetDisplay {...{ totalIncome, totalExpenses, savings }} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Expenses />
          <View style={styles.container}>
            <View style={styles.blankView} />
            <Text style={{ textDecorationLine: 'underline' }}>Income</Text>
            <View style={styles.incomeFormContainer}>
              <Input
                label="Weekly"
                value={weeklyIncome}
                selectTextOnFocus
                onChangeText={input => this.handleChangeInput(input, 'weeklyIncome')}
              />
            </View>
            <Text style={{ textDecorationLine: 'underline' }}>Expenses</Text>
            <View style={styles.expenseFormContainer}>
              <Input
                label="Rent"
                value={rentExpenses}
                selectTextOnFocus
                onChangeText={input => this.handleChangeInput(input, 'rentExpenses')}
              />
              <Input
                label="Car"
                value={carExpenses}
                selectTextOnFocus
                onChangeText={input => this.handleChangeInput(input, 'carExpenses')}
              />
              <Input
                label="Food"
                value={foodExpenses}
                selectTextOnFocus
                onChangeText={input => this.handleChangeInput(input, 'foodExpenses')}
              />
              <Input
                label="Spending"
                value={spendingExpenses}
                selectTextOnFocus
                onChangeText={input => this.handleChangeInput(input, 'spendingExpenses')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeViewContainer: {
    flex: 1
  },
  scrollContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    alignItems: 'center'
  },
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
  incomeFormContainer: {
    alignItems: 'center'
  },
  expenseFormContainer: {
    alignItems: 'center'
  }
});

export default MainScreen;
