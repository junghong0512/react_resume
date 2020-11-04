import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

import WebIcon from "@material-ui/icons/Web";
import WbIncandescentOutlinedIcon from "@material-ui/icons/WbIncandescentOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";

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
  webTImeline: [
    {
      title: "Python, Django, Tailwind, HTML, CSS",
      date: "2020.07 - present",
      description:
        "Python을 기반으로 한 Django Framework를 활용하여, Airbnb 클론 코딩을 진행하고 있음. Django는 여러번 다루어 봐야 할것 같음.",
    },
    {
      title: "React JS, NodeJS, MongoDB, GraphQL, MySQL",
      date: "2019.10 - present",
      description:
        "Javascript를 기반으로 프론트엔드에서 벡엔드까지 동작하는 웹페이지들을 제작 및 배포해봄. 유튜브 클론 코딩, 아마존 쇼핑몰 구현(Paypal결제 시스템)",
    },

    {
      title: "Javascript, HTML, CSS",
      date: "2019.06 - 2019.08",
      description:
        "Javascipt 문법 등을 독학으로 공부하고, CodeStates 부트캠프에서 약 2개월간 공부함. 부트캠프에서는 기본적인 포스기, 날씨앱, 트위터 등을 팀프로젝트 및 개인 프로젝트로 제작. 그때는 막막했지만 돌이켜보면 무지 단순하고 쉬운 프로젝트.",
    },
  ],
  educationTimeline: [
    {
      title: "CodeStates Pre 코스",
      date: "2019.08 - 2019.10",
      description:
        "코드스테이츠 프리 코스. 자바스크립트로의 입문. 자바스크립트로 간단한 포스기, 날씨앱, 트위터 등을 제작함. 프론트엔드 구현에 부족함을 느끼고 교육이 끝난 이후에 벡엔드 연동해서 다른 프로젝트들을 진행하였음.",
    },
    {
      title: "숭실대학교 정보통신전자공학부 입학 및 졸업",
      date: "2010.03 - 2019.03",
      description:
        "숭실대학교 정보통신전자공학부 졸업. 통신과 신호 쪽에 집중해서 공부하였음. Beacon을 이용한 자동결제 시스템 프로젝트, 차량 자율 주행 프로젝트 등을 수행하였음. 졸업 작품으로는 Home IoT 아마존 클라우드 서비스와 연동하는 프로젝트를 하였음",
    },
    {
      title: "서울 현대고등학교 재학 및 졸업",
      date: "2007.03 - 2010.02",
      description:
        "현대고등학교 졸업. 고등학교 시절을 돌이켜보자면 누구보다도 열심히 농구를 하고, 수학을 좋아했던 기억.",
    },
  ],
  services: [
    {
      title: "Web Development",
      description: "1년 이상 집중해서 웹개발에 올인했습니다.",
      icon: <WebIcon />,
    },
    {
      title: "Creativity",
      description:
        "개발 뿐만이 아니라 어떠한 문제에 있어서도 해결할 수 있는 창의력과 문제해결 능력을 가지고 있습니다.",
      icon: <WbIncandescentOutlinedIcon />,
    },
    {
      title: "Communication",
      description: "누구와도 편하게 대화하고 소통할 수 있습니다.",
      icon: <QuestionAnswerOutlinedIcon />,
    },
    {
      title: "Energy",
      description:
        "결과를 얻어내기 까지 방전되지 않습니다. 정신적 체력과 육체적 체력 모두 자신있습니다.",
      icon: <BatteryChargingFullIcon />,
    },
  ],
  skills: [
    {
      title: "front-end",
      list: [
        { name: "Javascript", skill: 90 },
        { name: "ReactJS", skill: 90 },
        { name: "Tailwind CSS", skill: 70 },
        { name: "Bootstrap", skill: 80 },
        { name: "Material UI", skill: 80 },
      ],
    },
    {
      title: "back-end",
      list: [
        { name: "NodeJS", skill: 90 },
        { name: "Python", skill: 90 },
        { name: "Django", skill: 80 },
      ],
    },
    {
      title: "database",
      list: [
        { name: "NodeJS", skill: 90 },
        { name: "MongoDB", skill: 90 },
        { name: "AWS EC2", skill: 80 },
        { name: "My SQL", skill: 80 },
      ],
    },
  ],
};

export default resumeData;
