import React, { Component } from 'react';
import { Text, Image, View, TouchableHighlight } from 'react-native';

class EmojiDetail extends Component {
  render() {
    const pic = {
      uri: this.props.emoji.url
    }
    return (
      <TouchableHighlight onPress={() => this.props.navigator.pop()}>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          marginTop: 20
        }}>
          <Text style={{fontSize: 20}}>Emoji name: {this.props.emoji.name}</Text>
          <Image source={pic} style={{width: 50, height: 50}} />
        </View>
      </TouchableHighlight>
    );
  }
}

export default EmojiDetail;
