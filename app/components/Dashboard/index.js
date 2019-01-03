import React, { Component } from 'react'
import {
  ActivityIndicator, View, Text, TextInput, TouchableHighlight, StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    // marginTop: 65,
    flex: 1,
    backgroundColor: '#48BBEC',
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> This is a dashboard. Yeah. </Text>
        <Text style={styles.text}>{JSON.stringify(this.props.userInfo)}</Text>
      </View>
    )
  }
}
