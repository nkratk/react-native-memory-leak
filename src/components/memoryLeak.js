import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class ScreenTwo extends Component {
  constructor() {
    super();
    this.records = [];
  }

  componentWillUnmount() {
    this.records = null;
  }

  addRecord() {
    this.records.push(new Array(999999).join('--'));
  }

  removeRecord() {
    this.records.pop();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent:
            'center'
        }}>

        <Text>Screen 2</Text>

        <Button
          title="Add Record"
          onPress={()=> this.addRecord()}
        />

        <Button
          title="Remove Record"
          onPress={()=> this.removeRecord()}
        />

        <Button
          title="Go back"
          onPress={()=> this.props.onHide()}
        />
      </View>
    );
  }
}

export default ScreenTwo;