export default class RepoModel {
  name = '';
  starsCount = 0;
  forksCount = 0;
  constructor(repo) {
    this.name = repo.name;
    this.starsCount = repo.stargazers_count;
    this.forksCount = repo.forks;
  }
}
