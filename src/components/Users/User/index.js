import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import i18n from "i18n-js";

import { UserImage, UserName, UserContainer } from './styledcomponents';

import routerAction from "../../../NavigationUtils/RouterAction"
class User extends Component {
  onClickUser = () => {
    routerAction.goToRepoScreen(this.props.user);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.onClickUser}>
        <UserContainer>
          <UserImage source={{ uri: this.props.user.avatarUrl }} />
          <UserName>{this.props.user.name}</UserName>
        </UserContainer>
      </TouchableOpacity>
    );
  }
}
export default User;
