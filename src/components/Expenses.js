import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import AmountCard from 'common/AmountCard';
import Button from 'common/Button';
import Input from 'common/Input';
import ModalTop from 'common/ModalTop';
import Text from 'common/Text';

class Expenses extends React.Component {
  state = {
    expenseItems: [],
    showModal: true,
    description: '',
    amount: ''
  };

  _openModal = () => {
    this.setState({ showModal: true });
  };

  _closeModal = () => {
    this.setState({ showModal: false });
  };

  handleChangeInput = (input, name) => {
    console.log(name, 'name');
    this.setState({ [name]: input });
  };

  addExpenseItem = (description, amount) => {
    const expenseItems = this.state.expenseItems;
    expenseItems.push({
      component: <AmountCard {...{ description, amount }} />,
      description,
      amount
    });
    this.setState({ expenseItems });
  };

  render() {
    const { expenseItems, showModal, description, amount } = this.state;
    console.log(description, amount, 'values');
    return (
      <React.Fragment>
        <ModalTop isVisible={showModal} onBackdropPress={this._closeModal}>
          <View style={{ flex: 0 }}>
            <Input
              label="Description"
              value={description}
              selectTextOnFocus
              onChangeText={input => this.handleChangeInput(input, 'amount')}
            />
            <Input
              label="Amount"
              value={amount}
              selectTextOnFocus
              onChangeText={input => this.handleChangeInput(input, 'description')}
            />
            <Button
              onPress={() => {
                this.addExpenseItem(description, amount);
                this._closeModal();
              }}
            >
              Add
            </Button>
          </View>
        </ModalTop>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Expenses</Text>
            <View style={styles.addButton}>
              <Icon name="plus" type="material-community" onPress={this._openModal} />
            </View>
          </View>
          <View style={styles.itemsContainer}>
            {expenseItems.map((item, i) => (
              <AmountCard key={i} />
            ))}
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: '100%'
  },
  titleContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    textDecorationLine: 'underline'
  },
  addButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#a3a3a3',
    borderWidth: 1,
    borderRadius: 100
  },
  itemsContainer: {
    flex: 1
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1
  }
});

export default Expenses;
