import {observable} from 'mobx';
export default class UserModel {
  @observable usersRepoList = [];
  @observable repoStatus = '';
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  getReposList() {
    this.usersRepoList = this.serviceName.getRepos();
  }
  enableLoader() {
    this.repoStatus = 'loading';
  }
  disableLoader() {
    this.repoStatus = 'success';
  }
  errorLoader() {
    this.repoStatus = 'error';
  }
}
