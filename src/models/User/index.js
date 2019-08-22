import {observable} from 'mobx';

import Repo from '../Repo';

import APIStatus from '../../constants/APIStatus';
export default class User {
  @observable usersRepoList = [];
  @observable repoAPIStatus = '';
  name;
  avatarUrl;
  reposUrl;
  constructor(userInfo, serviceName) {
    this.serviceName = serviceName;
    this.name = userInfo.login;
    this.avatarUrl = userInfo.avatar_url;
    this.reposUrl = userInfo.repos_url;
  }
  getReposList() {
    if (this.usersRepoList.length === 0) {
      this.setReposAPIStatus(APIStatus.loading);
      this.serviceName
        .getRepos(this.reposUrl)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            return Promise.reject();
          }
        })
        .then(reposList => {
          this.usersRepoList = reposList.map(repo => new Repo(repo));
          this.setReposAPIStatus(APIStatus.success);
        })
        .catch(err => {
          this.setReposAPIStatus(APIStatus.error);
        });
    }
  }
  setReposAPIStatus(status) {
    this.repoAPIStatus = status;
  }
}
