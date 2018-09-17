import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from 'common/Button.js';
import AmountCard from 'common/AmountCard';

class Expenses extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <AmountCard />
        <AmountCard />
        <AmountCard />
        <AmountCard />
        <View />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minWidth: '100%'
  }
});

export default Expenses;
