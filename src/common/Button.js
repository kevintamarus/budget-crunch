import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import Text from 'common/Text';

const Button = props => {
  return (
    <TouchableHighlight style={styles.container} onPress={props.onPress}>
      <React.Fragment>
        {typeof props.children === 'string' ? (
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
    minHeight: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    height: 40
  }
});

export default Button;
