import {observable} from 'mobx';
export default class UserModel {
  @observable usersRepoList = [];
  @observable isLoading = '';
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  getReposList() {
    this.usersRepoList = this.serviceName.getRepos();
  }
}
