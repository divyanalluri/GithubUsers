import UserModel from './UserModel';
import UserFixtures from '../services/RepoServices/index.fixtures';
const userModel = new UserModel(new UserFixtures());
describe('test cases for user model', () => {
  test('test case for getRepos api call', () => {
    userModel.getReposList();
    expect(userModel.usersRepoList.length).not.toBe(0);
  });
  test('testing whether the value of isLoading is loading after calling enableLoader function', () => {
    userModel.enableLoader();
    expect(userModel.repoStatus).toBe('loading');
  });
  test('testing whether the value of isLoading is success after calling disableLoader function', () => {
    userModel.disableLoader();
    expect(userModel.repoStatus).toBe('success');
  });
});
