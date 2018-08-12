import React from 'react';
import { Button as RNButton } from 'react-native';

const Button = props => {
  return <RNButton {...props}>{props.children}</RNButton>;
};

export default Button;
