import React from 'react';
import { Text as RNText } from 'react-native';

export const Text = props => {
  return <RNText>{props.children}</RNText>;
};
