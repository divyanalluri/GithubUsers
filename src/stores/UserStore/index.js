import { observable, action } from "mobx";

import UserModel from "../../models/UserModel"

class UserStore {
  @observable users = []
  @observable userInfo = []
  @observable success = false
  @observable error = false

  constructor(userservice) {
    this.service = userservice
  }

  @action.bound
  setUserAPIStatus() {
    this.success = true
  }
  @action.bound
  setUserAPIError() {
    this.error = true
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
        this.users = userAPI;
        for (var i = 0; i < this.users.length; i++) {
          this.addUser(this.users[i])
        }

      })
      .catch(err => console.log("error" + err));
  }

}
export default UserStore;