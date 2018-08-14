import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

const Text = props => {
  const styles = StyleSheet.create({
    text: {
      fontSize: 25,
      ...props.style
    }
  });
  return <RNText style={styles.text}>{props.children}</RNText>;
};

export default Text;
