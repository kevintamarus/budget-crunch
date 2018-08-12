import React from 'react';
import { TextInput, View } from 'react-native';

import Text from './Text.js';

const Input = props => {
  return (
    <View>
      {props.label && <Text>{props.label}</Text>}
      <TextInput {...props} />
    </View>
  );
};

export default Input;
