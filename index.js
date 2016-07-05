import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import FacebookExample from './FacebookExample';

export default React.createClass({
  render() {
    return <Navigator
      style={{flex: 1, }}
      initialRoute={{}}
      renderScene={this.renderScene}
    />;
  },

  renderScene(route, nav) {
    return <FacebookExample />;
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    padding: 10,
  },
});
