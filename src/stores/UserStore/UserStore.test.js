import UserService from "../../services/UserService/index.fixture"

import UserStore from "../UserStore";

describe("UserStore", () => {
  test("success state testing", () => {
    var userService = new UserService()
    var userStore = new UserStore(userService);
    userStore.UserAPIStatus()
    expect(userStore.success).toBe(true);

  })
  test("error case testing", () => {
    var userService = new UserService()
    var userStore = new UserStore(userService);
    userStore.UserAPIError()
    expect(userStore.error).toBe(true);

  })
});