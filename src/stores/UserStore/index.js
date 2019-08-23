import {observable, action} from 'mobx';

import UserServices from '../../services/RepoServices/index.api';
import User from '../../models/User';
import APIStatus from '../../constants/APIStatus';

class UserStore {
  @observable users = [];
  @observable userInfo = [];
  @observable userAPIStatus;

  constructor(userservice) {
    this.service = userservice;
  }

  @action.bound
  setUserAPIStatus(value) {
    this.userAPIStatus = value;
  }
  addUser(user) {
    this.userInfo.push(new User(user, new UserServices()));
  }
  @action.bound
  getUsers() {
    this.service
      .getUsers()
      .then(res => {
        this.setUserAPIStatus(APIStatus.loading);
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject();
        }
      })
      .then(userAPI => {
        userAPI.map(user => {
          this.addUser(user);
        });
        this.setUserAPIStatus(APIStatus.success);
      })
      .catch(err => {
        this.setUserAPIStatus(APIStatus.error);
      });
  }
}
export default UserStore;
