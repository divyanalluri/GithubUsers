import React, {Component} from 'react';
import {TouchableHighlight} from 'react-native';

import {UserImage, UserName, UserContainer} from './styledcomponents';

import RouterAction from '../../../Utils/RouterAction';

const routerAction = new RouterAction();
class User extends Component {
  onClickUser = () => {
    routerAction.getRepoScreen(this.props.user);
  };
  render() {
    return (
      <TouchableHighlight onPress={this.onClickUser}>
        <UserContainer>
          <UserImage source={{uri: this.props.user.avatarUrl}} />
          <UserName>{this.props.user.name}</UserName>
        </UserContainer>
      </TouchableHighlight>
    );
  }
}
export default User;
