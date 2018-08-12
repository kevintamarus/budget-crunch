import React from 'react';
import { Text, TextInput, View } from 'react-native';

// import { Text } from './Text';

export const Input = props => {
  return (
    <View>
      {props.label && <Text>{props.label}</Text>}
      <TextInput {...props} />
    </View>
  );
};
