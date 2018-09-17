import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { Icon } from 'react-native-elements';

import Text from 'common/Text';

const AmountCard = props => {
  return (
    <TouchableHighlight style={styles.touchableWrapper} onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.amount}>$200</Text>
        <Text style={styles.description}>Example Card</Text>
        <Icon size={15} name="close" type="material-community" color="#000000" />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchableWrapper: {
    flex: 1,
    width: '100%',
    minHeight: 40,
    paddingTop: '2%',
    paddingBottom: '2%'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#a3a3a3',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  description: {
    fontSize: 16
  },
  amount: {
    fontSize: 16
  }
});

export default AmountCard;
