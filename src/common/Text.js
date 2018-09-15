import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

const Text = props => {
  return <RNText style={[styles.text, props.style]}>{props.children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25
  }
});

export default Text;
