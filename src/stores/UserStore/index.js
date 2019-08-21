import { observable, action, computed } from "mobx";
class UserStore {
@observable users=[]
@observable success=false
@observable error=false
 constructor(userservice)
 {
     this.service=userservice
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
        this.success=true
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