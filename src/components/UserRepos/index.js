import React, {Component} from 'react';
import {FlatList, ActivityIndicator, Dimensions, View} from 'react-native';
import {observer} from 'mobx-react';

import UserRepo from './UserRepo';
import {DisplayStatus, ErrorText} from './StyledComponents';

import APIStatus from '../../constants/APIStatus';
const width = Dimensions.get('window').width;

@observer
class UserRepos extends Component {
  componentDidMount = () => {
    this.props.user.getReposList();
  };

  renderRepoList = () => {
    switch (this.props.user.repoAPIStatus) {
      case APIStatus.success:
        return (
          <FlatList
            data={this.props.user.usersRepoList}
            showsVerticalScrollIndicator={true}
            renderItem={({item}) => <UserRepo repo={item} />}
          />
        );
      case APIStatus.loading:
        return (
          <DisplayStatus width={width}>
            <ActivityIndicator size="large" color="grey" />
          </DisplayStatus>
        );
      default:
        return (
          <DisplayStatus width={width}>
            <ErrorText>Error while loading repos...</ErrorText>
          </DisplayStatus>
        );
    }
  };
  render() {
    return <View>{this.renderRepoList()}</View>;
  }
}
export default UserRepos;
