import React, { Component } from "react"
import { View, FlatList, ActivityIndicator } from "react-native"
import { observer } from "mobx-react";

import { status } from "../../stores/UserStore/constants"

import User from "./User"

@observer
class Users extends Component {

  renderUsers() {

    return (
      <FlatList
        data={this.props.userStore.userInfo}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => <User user={item} key={item.name} />}
      />
    );
  }
  render() {
    return (
      <View>
        {this.props.userStore.userAPIStatus === status.SUCCESS ?
          this.renderUsers() : (<ActivityIndicator size="large" color="#0000ff" />)}
      </View>)
  }
}
export default Users