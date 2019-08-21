import UserModel from './UserModel';
import UserFixtures from '../services/RepoServices/index.fixtures';

describe('test cases for user model', () => {
  test('test case for getRepos api call', () => {
    const userModel = new UserModel(new UserFixtures());
    userModel.getReposList();
    expect(userModel.usersRepoList.length).not.toBe(0);
  });
});
