import React from "react";
import { Typography } from "@material-ui/core";

import profileImg from "../../assets/images/profileImg.jpg";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">정홍</Typography>
        <Typography className="title">Fullstact Developer</Typography>
      </div>

      <figure className="profile_image">
        <img src={profileImg} alt="profile" />
      </figure>

      <div className="profile_information">
        Insert Timeline
        <br />
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Profile;
