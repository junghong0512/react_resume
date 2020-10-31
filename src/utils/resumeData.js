import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

export default {
  name: "정 홍",
  title: "Full Stack Developer",
  birthdate: "12th March 1991",
  email: "junghong0512@gmail.com",
  job: "Freelancer",
  kakao: "junghong0512",
  phone: "010-9956-4014",
  address: "강남구 신사동 554-17 5층",
  socials: {
    facebook: {
      link:
        "https://www.facebook.com/profile.php?id=100001442749014&locale=ko_KR",
      text: "My Facebook",
      icon: <FacebookIcon />,
    },
    github: {
      link: "https://github.com/junghong91",
      text: "My Github",
      icon: <GitHubIcon />,
    },
    instagram: {
      link: "https://www.instagram.com/__hongy/",
      text: "My Instagram",
      icon: <InstagramIcon />,
    },
  },
};
