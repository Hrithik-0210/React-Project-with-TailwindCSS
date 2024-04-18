import React from "react";
import UserContext from "../utils/UserContext";

class Profile extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>Profile class component</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4>
              {user.name} {user.email}
            </h4>
          )}
        </UserContext.Consumer>
      </>
    );
  }
}
export default Profile;
