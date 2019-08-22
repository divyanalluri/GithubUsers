import UserModel from '.';
import UserFixtures from '../../services/RepoServices/index.fixtures';
const userModel = new UserModel(new UserFixtures());
describe('test cases for user model', () => {
  test('test case for getRepos api call', () => {});
  test('testing whether the value of isLoading is loading after calling enableLoader function', () => {
    userModel.enableLoader();
    expect(userModel.repoAPIStatus).toBe('loading');
  });
  test('testing whether the value of isLoading is success after calling disableLoader function', () => {
    userModel.disableLoader();
    expect(userModel.repoAPIStatus).toBe('success');
  });
  test('testing whether the value of isLoading is error after calling errorLoader function', () => {
    userModel.errorLoader();
    expect(userModel.repoAPIStatus).toBe('error');
  });
});
