import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Input, Text } from '../common';

export default class Main extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>Main Page</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});
