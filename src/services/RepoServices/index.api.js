export default class UserServices {
  getRepos() {
    return fetch('https://api.github.com/users/simonjefford/repos');
  }
}
