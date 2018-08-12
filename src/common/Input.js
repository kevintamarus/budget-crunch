import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Text from './Text.js';

const Input = props => {
  return (
    <View style={styles.container}>
      {props.label && <Text>{props.label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput {...props} />
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
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 5
  }
});

export default Input;
