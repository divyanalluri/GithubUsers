import React, {Component} from 'react';
import {FlatList, Dimensions, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react';

import UserRepo from './UserRepo';
import {Header, HeaderText, RepoList, ErrorText} from './StyledComponents';

import User from '../../models/User';
import UserServices from '../../services/RepoServices/index.api';
import APIStatus from '../../constants/APIStatus';

const width = Dimensions.get('window').width;

const user = new User(new UserServices());
@observer
class UserRepos extends Component {
  componentDidMount = () => {
    user.getReposList();
  };
  renderRepoList = () => {
    switch (user.repoAPIStatus) {
      case APIStatus.success:
        return (
          <FlatList
            data={user.usersRepoList}
            showsVerticalScrollIndicator={true}
            renderItem={({item}) => <UserRepo repo={item} />}
          />
        );
      case APIStatus.loading:
        return <ActivityIndicator size="large" color="#0000ff" />;
      default:
        return <ErrorText>Error while loading repos...</ErrorText>;
    }
  };
  render() {
    return (
      <>
        <Header width={width}>
          <HeaderText>User Name</HeaderText>
        </Header>
        <RepoList>{this.renderRepoList()}</RepoList>
      </>
    );
  }
}
export default UserRepos;
