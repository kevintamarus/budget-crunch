import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '../common/Text';

const BudgetDisplay = props => {
  const { totalIncome, totalExpenses, savings } = props;
  return (
    <View style={styles.container}>
      <Text style={{ color: 'navy' }}>Total Income: $ {totalIncome.toFixed(2)}</Text>
      <Text style={{ color: 'red' }}>Total Expenses: $ {totalExpenses.toFixed(2)}</Text>
      <Text style={{ color: 'green' }}>Savings Per Month: $ {savings.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#a3a3a3',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default BudgetDisplay;
