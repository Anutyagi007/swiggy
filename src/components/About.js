import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Outlet/>
      <Profile name={"Anubhav"}/>
      <ProfileClass name={"AnubhavClass"}/>
    </div>
  );
};

export default About;
