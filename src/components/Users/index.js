import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import { observer } from 'mobx-react';

import APIStatus from '../../constants/APIStatus';

import User from './User';

import { DisplayStatus, ErrorText } from '../UserRepos/StyledComponents';

const width = Dimensions.get('window').width;

@observer
class Users extends Component {
  renderUsers() {
    switch (this.props.userStore.userAPIStatus) {
      case APIStatus.success:
        return (
          <FlatList
            data={this.props.userStore.userInfo}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => <User user={item} key={item.name} />}
          />
        );
      case APIStatus.loading:
        return (
          <DisplayStatus width={width}>
            <ActivityIndicator size="large" color="grey" />
          </DisplayStatus>
        );
      case APIStatus.error:
        return (
          <DisplayStatus width={width}>
            <ErrorText>Error while loading users...</ErrorText>
          </DisplayStatus>
        );
    }
  }
  render() {
    return <View>{this.renderUsers()}</View>;
  }
}
export default Users;
