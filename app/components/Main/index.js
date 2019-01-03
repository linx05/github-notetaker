import React, { Component } from 'react'
import {
  ActivityIndicator, View, Text, TextInput, TouchableHighlight, StyleSheet,
} from 'react-native'
import Dashboard from '../Dashboard'
import { getBio } from '../../utils/api'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48BBEC',
  },
  searchInput: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    height: 50,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 8,
    color: '#111',
    minWidth: 300,
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: '#111',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
  }
})

export default class Main extends Component {
  state = { username: '', isLoading: false, error: false }
  handleChange = e => {
    this.setState({ username: e.nativeEvent.text })
  }

  handleSubmit = async e => {
    this.setState({ isLoading: true })
    try {
      const userBio = await getBio(this.state.username)
      this.props.navigator.push({
        title: userBio.name,
        component: Dashboard,
        passProps: {userInfo: userBio}
      })
      this.setState({ error: false, isLoading: false })
    } catch (e) {
      this.setState({ error: e, isLoading: false })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Search for a Github User</Text>
        <TextInput style={styles.searchInput} value={this.state.username} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit}
          underlayColor="white"
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
