import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Button from 'common/Button.js';
import AmountCard from 'common/AmountCard';
import Text from 'common/Text';

class Expenses extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Expenses</Text>
        <ScrollView contentContainerStyle={styles.container}>
          <AmountCard />
          <AmountCard />
          <AmountCard />
          <AmountCard />
          <View style={styles.buttonGroup}>
            <Button>Add Expense</Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: '100%',
    alignItems: 'center'
  },
  title: {
    textDecorationLine: 'underline'
  },
  scrollContainer: {
    minWidth: '100%'
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Expenses;
