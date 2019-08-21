import UserStore from "../UserStore";
import UserService from "../../services/UserService/index.fixture"
describe("UserStore", () => {
//   test("Adding a new user", () => {
//       var userService=new UserService()
//     var userStore = new UserStore(userService);
//     userStore.getUsers()
//     expect(userStore.users.length).toBe(0);
//   });

// test("testing the success state", () => {
// var userService=new UserService()
//   var userStore = new UserStore(userService);
//   userStore.getUsers()
//   expect(userStore.success).toBe(true);
// });

test("success state testing",()=>{
    var userService=new UserService()
  var userStore = new UserStore(userService);
  userStore.setSucess()
  expect(userStore.success).toBe(true);
  
})
test("error case testing",()=>{
    var userService=new UserService()
  var userStore = new UserStore(userService);
  userStore.setError()
  expect(userStore.error).toBe(true);
  
})
});