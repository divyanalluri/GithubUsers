/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,View} from "react-native"
import Users from "./src/components/Users"
import stores from "./src/stores"

class App extends Component {
  componentDidMount()
  {
    stores.userStore.getUsers()
  }
  render(){
  return (
    <View >
     <Users userStore={stores.userStore} />
    </View>
  );
};
}


export default App;
