import React from 'react';
import Modal from 'react-native-modal';
import { StyleSheet, Text, View } from 'react-native';

const ModalBottom = props => {
  return (
    <Modal {...props} style={[styles.container, props.style]}>
      <View style={styles.content}>{props.children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    margin: 0
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  }
});

export default ModalBottom;
