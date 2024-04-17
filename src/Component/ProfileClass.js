import React from "react";

class Profile extends React.Component {
  constructor() {
    super();
    console.log("constructor");
  }
  render() {
    console.log("render");
    return <h1>Profile class component</h1>;
  }
}
export default Profile;
