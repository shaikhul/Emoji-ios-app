/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Navigator
} from 'react-native';
import axios from 'axios';

import Emojis from './components/Emojis';
import EmojiDetail from './components/EmojiDetail';
import SearchBar from './components/SearchBar';

export default class EmojiApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      emojis: [],
      filterText: ''
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  handleFilterTextInput (filterText) {
    this.setState({
      filterText: filterText
    });
  }

  componentDidMount () {
    axios.get("https://api.github.com/emojis")
      .then(res => {
        var emojis = [];
        for (const key of Object.keys(res.data)) {
          emojis.push({
            "name": key,
            "url": res.data[key]
          });
        }
        this.setState({
          emojis: emojis
        });
      });
  }

  renderScene(route, navigator) {
     if(route.index == 0) {
       return (
         <ScrollView navigator={navigator} style={{padding: 10}} {...route.passProps}>
           <SearchBar onFilterTextInput={this.handleFilterTextInput} />
           <Emojis navigator={navigator} emojis={this.state.emojis} filterText={this.state.filterText} />
         </ScrollView>
       )
     } else if (route.index == 1) {
       return <EmojiDetail navigator={navigator} {...route.passProps} />
     }
  }

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ title: 'EmojiList', index: 0 }}
        renderScene={ this.renderScene } />
    );
  }
}

AppRegistry.registerComponent('EmojiApp', () => EmojiApp);
