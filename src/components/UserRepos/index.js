import React, {Component} from 'react';
import {FlatList, Dimensions, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react';

import UserRepo from './UserRepo';
import {Header, HeaderText, RepoList, ErrorText} from './StyledComponents';

import UserModel from '../../models/UserModel';
import UserServices from '../../services/RepoServices/index.api';
import APIStatus from '../../constants/APIStatus';

const width = Dimensions.get('window').width;

const userModel = new UserModel(new UserServices());
@observer
class UserRepos extends Component {
  componentDidMount = () => {
    userModel.getReposList();
  };
  renderRepoList = () => {
    switch (userModel.repoAPIStatus) {
      case APIStatus.success:
        return (
          <FlatList
            data={userModel.usersRepoList}
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
