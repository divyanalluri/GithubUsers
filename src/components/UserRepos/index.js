import React, { Component } from 'react';
import { FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react';

import UserRepo from './UserRepo';
import { Header, HeaderText, RepoList, ErrorText } from './StyledComponents';

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
            renderItem={({ item }) => <UserRepo repo={item} />}
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
          <HeaderText>{this.props.user.name}</HeaderText>
        </Header>
        <RepoList>{this.renderRepoList()}</RepoList>
      </>
    );
  }
}
export default UserRepos;
