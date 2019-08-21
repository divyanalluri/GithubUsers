import RepoModel from './RepoModel';

describe('test cases for repo model', () => {
  test('test case to check values in repo model', () => {
    const repo = {name: 'repoName', stargazers_count: 2, forks: 3};
    const repoModel = new RepoModel(repo);
    expect(repoModel.name).toBe('repoName');
    expect(repoModel.stargazers_count).toBe(2);
    expect(repoModel.forks).toBe(3);
  });
});
