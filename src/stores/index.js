import UserStore from "./UserStore"
import UserService from "../services/UserService/index.api"
const userService=new UserService
const userStore = new UserStore(userService)
export default {userStore}