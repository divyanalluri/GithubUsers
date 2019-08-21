/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, ScrollView } from "react-native"
import Users from "./src/components/Users"
import stores from "./src/stores"

class App extends Component {
  componentDidMount() {
    stores.userStore.getUsers()
  }
  render() {
    return (
      <ScrollView >
        <Users userStore={stores.userStore} />
      </ScrollView>
    );
  };
}


export default App;
