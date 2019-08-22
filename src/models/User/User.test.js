import User from '.';
import UserFixtures from '../../services/RepoServices/index.fixtures';
const userModel = new User(new UserFixtures());
describe('test cases for user model', () => {
  test('test case for getRepos api call', () => {});
  test('testing whether the value of isLoading is loading after calling setReposAPIStatus function', () => {
    userModel.setReposAPIStatus('loading');
    expect(userModel.repoAPIStatus).toBe('loading');
  });
  test('testing whether the value of isLoading is success after calling setReposAPIStatus function', () => {
    userModel.setReposAPIStatus('success');
    expect(userModel.repoAPIStatus).toBe('success');
  });
  test('testing whether the value of isLoading is error after calling setReposAPIStatus function', () => {
    userModel.setReposAPIStatus('error');
    expect(userModel.repoAPIStatus).toBe('error');
  });
});
