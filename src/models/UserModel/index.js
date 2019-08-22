import {observable} from 'mobx';

import RepoModel from '../RepoModel';

import APIStatus from '../../constants/APIStatus';
export default class UserModel {
  @observable usersRepoList = [];
  @observable repoAPIStatus = '';
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  getReposList() {
    this.enableLoader();
    if (this.usersRepoList.length === 0) {
      this.serviceName
        .getRepos()
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            this.errorLoader();
            return Promise.reject;
          }
        })
        .then(reposList => {
          this.usersRepoList = reposList.map(repo => new RepoModel(repo));
          this.disableLoader();
        });
    }
  }
  enableLoader() {
    this.repoAPIStatus = APIStatus.loading;
  }
  disableLoader() {
    this.repoAPIStatus = APIStatus.success;
  }
  errorLoader() {
    this.repoAPIStatus = APIStatus.error;
  }
}
