class UserModel 
{
  name
  avatar_url
  repos_url
  constructor(userInfo)
  {
    this.name=userInfo.login;
    this.avatar_url=userInfo.avatar_url;
    this.repos_url=userInfo.repos_url;
  }
}
export default UserModel