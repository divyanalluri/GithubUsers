import { observable, action, computed } from "mobx";
import {Alert} from "react-native"
import UserModel from "../../models/UserModel"
class UserStore {
@observable users=[]
@observable userInfo = [] 
@observable success=false
@observable error=false
 constructor(userservice)
 {
     this.service=userservice
 }
 addUser(user) {
    this.userInfo.push( new UserModel(user));
  }

 @action.bound
getUsers()
 {  
    
     this.service.getUsers().then(res => {
        if (res.ok) { 
          return res.json();
        } else {
          return Promise.reject();
        }
      })
      .then(userAPI => {
        this.users = userAPI;
        for(var i=0;i<this.users.length;i++)
          {
           this.addUser(this.users[i])
         }

      })
      .catch(err => console.log("error" +err));
  }
  @action.bound
  setSucess(){
      this.success=true
  }
  @action.bound
  setError(){
      this.error=true
  }
 }
export default UserStore;