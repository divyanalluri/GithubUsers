import userslist from "../users.json";
class UserService {
  getUsers() {
    return userslist;
  }
}
export default UserService;