import {observable} from 'mobx';
export default class UserModel {
  @observable usersRepoList = [];
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  getReposList() {
    this.usersRepoList = this.serviceName.getRepos();
  }
}
