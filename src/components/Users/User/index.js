import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

import {UserImage, UserName, UserContainer} from './styledcomponents';

import routerAction from '../../../Utils/RouterAction';

class User extends Component {
  onClickUser = () => {
    routerAction.getRepoScreen(this.props.user);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.onClickUser}>
        <UserContainer>
          <UserImage source={{uri: this.props.user.avatarUrl}} />
          <UserName>{this.props.user.name}</UserName>
        </UserContainer>
      </TouchableOpacity>
    );
  }
}
export default User;
