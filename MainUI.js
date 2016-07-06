import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

//
'use strict';
var ReactNative = require('react-native');
const {
    Switch,
    TextInput,
    TouchableHighlight,
    } = ReactNative;
var DrawerLayout = require('react-native-drawer-layout');

var DrawerLockModeSwitches = React.createClass({

  render: function() {
    const {
        value,
        onValueChange,
        } = this.props;

    return (
        <View>
          <View style={[styles.container, styles.split]}>
            <Switch onValueChange={value => value ? onValueChange('unlocked') : onValueChange('unlocked')} value={value === 'unlocked'} />
            <Text style={styles.spacedLeft}>Unlocked</Text>
          </View>
          <View style={[styles.container, styles.split]}>
            <Switch onValueChange={value => value ? onValueChange('locked-closed') : onValueChange('unlocked')} value={value === 'locked-closed'} />
            <Text style={styles.spacedLeft}>locked-closed</Text>
          </View>
          <View style={[styles.container, styles.split]}>
            <Switch onValueChange={value => value ? onValueChange('locked-open') : onValueChange('unlocked')} value={value === 'locked-open'} />
            <Text style={styles.spacedLeft}>locked-open</Text>
          </View>
        </View>
    );
  }
});

export default React.createClass({

  getInitialState() {
    return {
      drawerLockMode: 'unlocked',
    };
  },

  render() {
    const {
        drawerLockMode,
        } = this.state;

    const navigationView = (
        <View style={[styles.container, {backgroundColor: '#fff'}]}>
          <Text>Hello there!</Text>
          <DrawerLockModeSwitches value={drawerLockMode} onValueChange={value => this.setState({drawerLockMode: value})} />
          <TouchableHighlight onPress={() => this.drawer.closeDrawer()}>
            <Text>Close drawer</Text>
          </TouchableHighlight>
        </View>
    );

    return (
      <DrawerLayout
          onDrawerSlide={(e) => this.setState({drawerSlideOutput: JSON.stringify(e.nativeEvent)})}
          onDrawerStateChanged={(e) => this.setState({drawerStateChangedOutput: JSON.stringify(e)})}
          drawerWidth={300}
          drawerLockMode={drawerLockMode}
          ref={(drawer) => { return this.drawer = drawer  }}
          keyboardDismissMode="on-drag"
          renderNavigationView={() => navigationView}>
        {/*
        <View style={styles.container}>
          <Text style={styles.welcome}>Content!</Text>
          <DrawerLockModeSwitches value={drawerLockMode} onValueChange={value => this.setState({drawerLockMode: value})} />
          <Text>{this.state.drawerStateChangedOutput}</Text>
          <Text>{this.state.drawerSlideOutput}</Text>
          <TouchableHighlight onPress={() => this.drawer.openDrawer()}>
            <Text>Open drawer</Text>
          </TouchableHighlight>
          <TextInput style={styles.inputField} />
        </View>
        */}

        <ScrollableTabView
            style={{marginTop: 20, }}
            tabBarPosition={'bottom'}
            initialPage={0}
            renderTabBar={() => <FacebookTabBar />}
        >
          <ScrollView tabLabel="ios-paper" style={styles.tabView}>
            <View style={styles.card}>
              <Text>News</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-chatbubbles" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Friends</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-leaf" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Messenger</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-people" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Notifications</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-contact" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Other nav</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>

      </DrawerLayout>
    );
  },
});

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputField: {
    backgroundColor: '#F2F2F2',
    height: 40,
  },
  split: {
    flexDirection: 'row',
  },
  spacedLeft: {
    paddingLeft: 10,
  }
});
