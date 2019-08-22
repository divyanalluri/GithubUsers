import {observable} from 'mobx';
import RepoModel from '../RepoModel';
export default class UserModel {
  @observable usersRepoList = [];
  @observable repoStatus = '';
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  getReposList() {
    if (this.usersRepoList.length === 0) {
      this.serviceName
        .getRepos()
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            return Promise.reject;
          }
        })
        .then(reposList => {
          this.usersRepoList = reposList.map(repo => new RepoModel(repo));
        });
    }
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
