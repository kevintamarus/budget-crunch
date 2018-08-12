import React from 'react';
import { Button as RNButton } from 'react-native';

export const Button = props => {
  return <RNButton {...props}>{props.children}</RNButton>;
};
