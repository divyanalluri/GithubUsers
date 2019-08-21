import React,{Component} from "react"
import User from "./User"
import { observer } from "mobx-react";
@observer
class Users extends Component{
render(){
    console.log("userinfo"+this.props.userStore.userInfo)
    return this.props.userStore.userInfo.map(user => (
        <User user={user} key={user.name} userStore={this.props.userStore}/>
      ));
}
}
export default Users