import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';

class Emoji extends Component {
  constructor(props) {
    super(props);
    this._navigate = this._navigate.bind(this);
  }

  _navigate(emoji) {
    this.props.navigator.push({
      name: 'Detail',
      index: 1,
      passProps: {
        emoji: emoji
      }
    })
  }

  render() {
    const pic = {
      uri: this.props.emoji.url
    }
    return (
      <TouchableHighlight onPress={ () => this._navigate(this.props.emoji) }>
        <Image source={pic} style={{width: 50, height: 50}} />
      </TouchableHighlight>
    );
  }
}

export default Emoji;
