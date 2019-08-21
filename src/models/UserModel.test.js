import UserModel from './UserModel';
describe('test cases for user model', () => {
  test('test case for getRepos api call', () => {
    const userModel = new UserModel();
    userModel.getRepos();
    expect(userModel.usersRepoList.length).not.toBe(0);
  });
});
