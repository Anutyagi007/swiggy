import React from "react";
class ProfileClass extends React.Component{
    render(){
        return <h1>Name:-{this.props.name}</h1>
    }
}
export default ProfileClass