import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

export const resumeData = {
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
  about: {
    title: "자신감이 있는, 그리고 겸손한 개발자",
    description:
      "전자공학을 전공하고 웹개발까지 하기 위해 정말 많이 노력했습니다. 컴퓨터 내부를 알고, 컴퓨터의 구조를 알고 코딩하는 개발자가 되겠습니다.현재 알고있는 기술에 만족하지 않고, 최신 기술 습득에 게을리 하지 않는 개발자가 되는게 목표입니다. 항상 발전하고 공부하는 개발자, 저는 정 홍 입니다.\n\n대학교를 졸업하고 우연히 Javascript를 접하게 되었고, 웹프로그래밍의 재미에 빠져서 취업을 늦추고 웹개발 공부에 전념하였습니다. 코딩에 있어서는 자신이 있었지만, 항상 제 자신은 부족하다고 생각하며 자기발전에 힘써왔습니다. 이젠 밥값을 할 준비가 되었다고 생각합니다. 웹개발의 첫발은 프론트엔드였습니다. 그 과정에서 항상 부족함을 느꼈고 웹사이트를 만들더라도 완성하는 느낌을 받을 수 없었습니다. 그 부족함을 채우기 위해서 벡엔드를 독학으로 공부했고, 이제는 웹페이지 내부에 데이터의 저장과 흐름을 아는 웹개발자가 되었습니다.",
  },
};

export default resumeData;
