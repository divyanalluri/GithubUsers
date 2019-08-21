class UserService {
  getUsers() {
    return fetch("https://api.github.com/users?since=135")
  }
}
export default UserService;