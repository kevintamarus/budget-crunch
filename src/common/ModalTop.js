import React from 'react';
import Modal from 'react-native-modal';
import { StyleSheet, SafeAreaView, View } from 'react-native';

const ModalTop = props => {
  return (
    <Modal {...props} style={[styles.container, props.style]}>
      <SafeAreaView>
        <View style={styles.content}>{props.children}</View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    margin: 0
  },
  content: {
    backgroundColor: 'white',
    paddingTop: '25%',
    paddingBottom: '25%',
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  }
});

export default ModalTop;
