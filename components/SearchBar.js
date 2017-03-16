import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(text) {
    this.props.onFilterTextInput(text);
  }

  render () {
    return (
      <TextInput
        style={{height: 40, width:180}}
        placeholder="Type an emoji name.."
        onChangeText={(text) => this.handleFilterTextInputChange(text)}
        value={this.props.filterText}
      />
    );
  }
}

export default SearchBar;
