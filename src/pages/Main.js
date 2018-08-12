import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Input from '../common/Input';
import Text from '../common/Text';

export default class Main extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.blankView} />
          <Text>Main Page</Text>
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
  }
});
