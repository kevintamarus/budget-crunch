import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Text from './Text.js';

const Input = props => {
  return (
    <View style={styles.container}>
      {props.label && <Text>{props.label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  inputContainer: {
    borderColor: '#6495ED',
    borderWidth: 2,
    borderRadius: 5
  },
  input: {
    height: 40,
    fontSize: 20
  }
});

export default Input;
