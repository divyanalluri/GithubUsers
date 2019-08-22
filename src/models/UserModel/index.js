class UserModel {
  name
  avatarUrl
  reposUrl
  constructor(userInfo) {
    this.name = userInfo.login;
    this.avatarUrl = userInfo.avatar_url;
    this.reposUrl = userInfo.repos_url;
  }
}
export default UserModel