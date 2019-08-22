import React, {Component} from 'react';
import {View, FlatList, Dimensions, Text} from 'react-native';
import UserRepo from './UserRepo';
import UserModel from '../../models/UserModel';
import UserServices from '../../services/RepoServices/index.api';
import {observer} from 'mobx-react';
import {Header, HeaderText} from './StyledComponents';
const width = Dimensions.get('window').width;

const userModel = new UserModel(new UserServices());
@observer
class UserRepos extends Component {
  componentDidMount = () => {
    userModel.getReposList();
  };
  displayRepos = () => {
    console.log('hello');
    return userModel.usersRepoList.map(repo => <UserRepo repo={repo} />);
  };
  render() {
    return (
      <>
        <Header width={width}>
          <HeaderText>User Name</HeaderText>
        </Header>
        <FlatList
          data={userModel.usersRepoList}
          showsVerticalScrollIndicator={true}
          renderItem={({item}) => <UserRepo repo={item} />}
        />
      </>
    );
  }
}
export default UserRepos;
