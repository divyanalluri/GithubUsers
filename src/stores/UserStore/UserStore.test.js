import UserStore from ".";
describe("UserStore", () => {
  test("Adding a new user", () => {
    var userStore = new UserStore();
    userStore.addUser("hello")
    expect(userStore.users.length).toBe(1);
  });
});