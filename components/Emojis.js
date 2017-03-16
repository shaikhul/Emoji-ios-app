import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Emoji from './Emoji';

class Emojis extends Component {
  render() {
    var emojis = [];
    this.props.emojis.forEach((emoji, index) => {
      var name = emoji.name;
      if (name.indexOf(this.props.filterText.trim().toLowerCase()) === -1) {
        return;
      }
      emojis.push(<Emoji navigator={this.props.navigator} key={index} emoji={emoji} />);
    });

    var content = emojis;
    if (this.props.filterText && emojis.length == 0) {
      content = <Text>No emoji found! try another...</Text>
    }
    return (
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        }}>
        {content}
      </View>
    );
  }
}

export default Emojis;
