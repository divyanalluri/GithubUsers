import UserService from "../services/UserService/index.api"

import UserStore from "./UserStore"

const userService = new UserService
const userStore = new UserStore(userService)

export default { userStore }