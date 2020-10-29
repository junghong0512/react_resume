import React from "react";
import { Typography } from "@material-ui/core";

import CustomTimeline from "../Timeline/Timeline";
import profileImg from "../../assets/images/profileImg.jpg";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">정 홍(Jung Hong)</Typography>
        <Typography className="title">Fullstact Developer</Typography>
      </div>

      <figure className="profile_image">
        <img src={profileImg} alt="profile" />
      </figure>

      <div className="profile_information">
        <CustomTimeline />
        <br />
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Profile;
