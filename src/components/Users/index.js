import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {observer} from 'mobx-react';

import APIStatus from '../../constants/APIStatus';

import User from './User';

@observer
class Users extends Component {
  renderUsers() {
    switch (this.props.userStore.userAPIStatus) {
      case APIStatus.success:
        return (
          <FlatList
            data={this.props.userStore.userInfo}
            showsVerticalScrollIndicator={true}
            renderItem={({item}) => <User user={item} key={item.name} />}
          />
        );
      case APIStatus.loading:
        return <ActivityIndicator size="large" color="#0000ff" />;
      case APIStatus.error:
        return <Text>Error while loading users...</Text>;
    }
  }
  render() {
    return <View>{this.renderUsers()}</View>;
  }
}
export default Users;
