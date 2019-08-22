import { observable, action } from "mobx";

import UserModel from "../../models/UserModel"
import { status } from "./constants"

class UserStore {
  @observable users = []
  @observable userInfo = []
  @observable userAPIStatus
  @observable userAPIError

  constructor(userservice) {
    this.service = userservice
  }

  @action.bound
  setUserAPIStatus() {
    this.userAPIStatus = status.SUCCESS
  }
  @action.bound
  setUserAPIError() {
    this.userAPIError = status.ERROR
  }
  addUser(user) {
    this.userInfo.push(new UserModel(user));
  }
  @action.bound
  getUsers() {

    this.service.getUsers().then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject();
      }
    })
      .then(userAPI => {
        userAPI.map(user => {
          this.addUser(user)
        })
        this.setUserAPIStatus()
      })
      .catch(err => { this.setUserAPIError() })
  }

}
export default UserStore;