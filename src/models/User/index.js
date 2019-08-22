import {observable} from 'mobx';

import Repo from '../Repo';

import APIStatus from '../../constants/APIStatus';
export default class User {
  @observable usersRepoList = [];
  @observable repoAPIStatus = '';
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  getReposList() {
    this.setReposAPIStatus(APIStatus.loading);
    if (this.usersRepoList.length === 0) {
      this.serviceName
        .getRepos()
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            this.setReposAPIStatus(APIStatus.error);
            return Promise.reject;
          }
        })
        .then(reposList => {
          this.usersRepoList = reposList.map(repo => new Repo(repo));
          this.setReposAPIStatus(APIStatus.success);
        });
    }
  }
  setReposAPIStatus(status) {
    this.repoAPIStatus = status;
  }
}
