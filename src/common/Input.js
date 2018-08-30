import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Text from './Text.js';

const Input = props => {
  return (
    <View style={styles.container}>
      {props.label && <Text style={{ color: '#6495ED' }}>{props.label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: '80%',
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
    fontSize: 20,
    textAlign: 'center'
  }
});

export default Input;
