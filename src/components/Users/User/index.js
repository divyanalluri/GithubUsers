import React,{Component }from "react"
import {Text} from "react-native"
class User extends Component{
render(){
    return (
        <Text>{this.props.user.name}</Text>
    )
}
}
export default User