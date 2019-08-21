import userslist from "../users.json";
class UserService {
  getUsers() {
    return Promise.resolve(userslist);
  }
}
export default UserService;