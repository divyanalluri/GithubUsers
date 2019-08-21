import React, { Component } from "react"
import { Image, View, Text } from "react-native"
import { UserImage, UserName, UserContainer } from "./styledcomponents"
class User extends Component {
    render() {
        return (
            <UserContainer>
                <UserImage source={{ uri: this.props.user.avatar_url }} />
                <UserName>{this.props.user.name}</UserName>
            </UserContainer>
        )
    }
}
export default User