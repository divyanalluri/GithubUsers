import React, { Component } from "react"
import { View } from "react-native"
import { observer } from "mobx-react";

import stores from "../../stores"

import User from "./User"

@observer
class Users extends Component {

  renderUsers() {
    console.log(stores.userStore.userInfo)
    return stores.userStore.userInfo.map(user => (

      <User user={user} key={user.name} userStore={stores.userStore} />
    ))
  }
  render() {
    return (
      <View>
        {this.renderUsers()}
      </View>)
  }
}
export default Users