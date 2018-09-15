import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import Text from '../common/Text';

const AmountCard = props => {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
      <Icon name="close" type="material-community" color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  }
});

export default AmountCard;
