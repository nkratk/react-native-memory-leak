import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class ScreenOne extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      records: [],
      records1: [],
      records2: [],
    };
  };

  componentWillUnmount() {
    console.log('unmounting ScreenOne');
    /** 
     * You should not call setState() in componentWillUnmount() because the 
     * component will never be re-rendered. Once a component instance is unmounted, 
     * it will never be mounted again.
    */
  }

  shouldComponentUpdate(props, state) {
    console.log('state', state, 'props', props);

    return true;
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 1</Text>
        <Button
          title="Add Record"
          onPress={() => {
            this.setState((prevState) => {
              return {
                records: [...prevState.records, new Array(999999).join('--')],
                records1: [...prevState.records1, new Array(999999).join('--')],
                records2: [...prevState.records2, new Array(999999).join('--')]
              }
            });
          }}
        />
        <Button
          title="Remove"
          onPress={() => {
            this.setState(this.getInitialState());
          }}
        />
        <Button title="Go back" 
          onPress={() => {
            console.log('navigation is called');
            this.setState(this.getInitialState(), this.props.onHide);
          }}
        />
      </View>
    );
  }
}

export default ScreenOne;