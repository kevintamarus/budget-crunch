import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const Button = props => {
  return (
    <TouchableHighlight style={styles.container}>
      <React.Fragment>
        {props.children === 'string' ? (
          <View style={styles.button}>
            <Text>{props.children}</Text>
          </View>
        ) : (
          props.children
        )}
      </React.Fragment>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#a3a3a3',
    height: 40
  },
  button: {
    flex: 1,
    height: 40,
    borderWidth: 6,
    borderColor: 'red'
  }
});

export default Button;
