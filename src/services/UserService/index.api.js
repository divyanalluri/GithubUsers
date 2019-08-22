import { UsersURL } from "../../stores/Utils/constants"
class UserService {
  getUsers() {
    return fetch(UsersURL.URL)
  }
}
export default UserService;