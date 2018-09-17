import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Button from 'common/Button.js';
import AmountCard from 'common/AmountCard';
import Text from 'common/Text';

class Expenses extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Expenses</Text>
          <View style={styles.addButton}>
            <Icon name="plus" type="material-community" />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <AmountCard />
          <AmountCard />
          <AmountCard />
          <AmountCard />
        </ScrollView>
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
  scrollContainer: {
    minWidth: '100%'
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1
  }
});

export default Expenses;
