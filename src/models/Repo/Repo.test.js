import Repo from '.';

describe('test cases for repo model', () => {
  test('test case to check values in repo model', () => {
    const repo = {name: 'repoName', stargazers_count: 2, forks: 3};
    const repoModel = new Repo(repo);
    expect(repoModel.name).toBe('repoName');
    expect(repoModel.starsCount).toBe(2);
    expect(repoModel.forksCount).toBe(3);
  });
});
