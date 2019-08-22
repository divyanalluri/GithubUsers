import userslist from "../../fixtures/users.json";
class UserService {
  getUsers() {
    return userslist;
  }
}
export default UserService;