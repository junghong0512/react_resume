import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

import SlideshowIcon from "@material-ui/icons/Slideshow";
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
  address: "서울 강남구 신사동 554-17 5층",
  socials: {
    facebook: {
      link:
        "https://www.facebook.com/profile.php?id=100001442749014&locale=ko_KR",
      text: "View Facebook",
      icon: <FacebookIcon />,
    },
    github: {
      link: "https://github.com/junghong91",
      text: "View Github",
      icon: <GitHubIcon />,
    },
    instagram: {
      link: "https://www.instagram.com/__hongy/",
      text: "View Instagram",
      icon: <InstagramIcon />,
    },
  },
  about: {
    title: "자신감이 있는, 그리고 겸손한 개발자",
    description:
      "안녕하세요. 저는 컴퓨터 내부를 들여다보는 개발자 정 홍 입니다. 저는 전자공학을 전공했고, 현재는 웹개발을 주로 다루고 있지만, 대학 때 배운 컴퓨터 구조 및 자료구조 등을 토대로 컴퓨터 시스템에 최적화된 코드를 작성하고자 노력하고 있습니다.\n\n대학교때 졸업 프로젝트로 Home IoT 플랫폼을 구축을 했었는데, 당시 클라우드 서버(AWS EC2)에 저장된 데이터들을 시각적으로 웹페이지를 통해서 그래프로 표현하고 버튼 등으로 디바이스를 조작할 수 있게 하려던 것이 저의 웹개발의 시작점이 되었습니다. \n\n저는 프론트엔드로 웹사이트를 주로 제작하다가 조금 더 완성된 형태의 웹사이트를 제작하기 위해서 벡엔드 공부를 동반하고 있습니다. 현재는 웹사이트의 디자인과 데이터의 흐름을 파악하고 구현할 수 있으며, 최근에는 결제시스템과 사용자 인증 시스템까지 갖춘 웹사이트 제작을 하고 있습니다. ",
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
      description:
        "프론트엔드를 시작으로 벡엔드까지 1년 이상 집중해서 웹개발에 몰두했습니다.",
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
        { name: "MongoDB", skill: 90 },
        { name: "GraphQL", skill: 90 },
        { name: "MySQL", skill: 80 },
        { name: "AWS S2", skill: 80 },
        { name: "AWS EC2", skill: 80 },
      ],
    },
    {
      title: "certificate",
      list: [
        { name: "정보처리기사", skill: 100 },
        { name: "MOS PowerPoint", skill: 100 },
        { name: "MOS Exel", skill: 100 },
      ],
    },
  ],
  projects: [
    // Project 1.
    {
      tag: "Javascript",
      caption: "Clonging a Youtube with Vanilla and NodeJS",
      skills: [
        "Javascript",
        "NodeJS",
        "ES6",
        "Express",
        "Babel",
        "Pug",
        "Passport",
        "AJAX",
        "Webpack",
        "SCSS",
        "MongoDB",
        "Mongoose",
        "Multer",
        "ESLint",
      ],
      image: [
        "https://cdn.pixabay.com/photo/2018/12/13/19/39/youtube-3873587_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/12/13/19/39/youtube-3873587_1280.jpg",
      ],
      title: "Youtube Clone Coding",
      description: "Clonging a Youtube with Vanilla and NodeJS",
      links: [
        {
          info: "Detail",
          link: "https://dry-plains-77031.herokuapp.com",
          icon: <SlideshowIcon />,
        },
        {
          info: "Github",
          link: "https://github.com/junghong91/wetube",
          icon: <GitHubIcon />,
        },
      ],
    },

    // Project 2.
    {
      tag: "React",
      caption: "Building an E-Commerse App with ReactJS",
      skills: ["React", "Redux", "Express", "NodeJS", "MongoDB", "Mongoose"],
      image: [
        "https://cdn.pixabay.com/photo/2019/09/30/15/23/online-shopping-4516043_1280.jpg",
        "https://cdn.pixabay.com/photo/2018/07/26/09/56/ecommerce-3563183_1280.jpg",
      ],
      title: "E-commerce app with React",
      description:
        "Build an ecommerce website like amazon. Design, develop and deploy a fully-function website like amazon using MERN stack",
      links: [
        {
          info: "Detail",
          link: "https://hongshop.herokuapp.com/",
          icon: <SlideshowIcon />,
        },
        {
          info: "Github",
          link: "https://github.com/junghong91/React_Ecommerse",
          icon: <GitHubIcon />,
        },
      ],
    },

    // Project 3.
    {
      tag: "Django",
      caption: "Building an Airbnb App with Python and Django",
      skills: [
        "Python",
        "Django",
        "Tailwind CSS",
        "HTML5",
        "Gulp",
        "ES6",
        "Mailgun",
        "AWS EB",
        "AWS S3",
      ],
      image: [
        "https://i.pinimg.com/564x/92/55/b7/9255b7740f08665695a9d03b46fde885.jpg",
        "https://i.pinimg.com/564x/f0/6a/f6/f06af6a4c0dd85055ff3d0fa4cbb956a.jpg",
      ],
      title: "Airbnb app using Django",
      description: "Cloning Airbnb with Python, Django, Tailwind and more...",
      links: [
        {
          info: "Detail",
          link: "https://hongshop.herokuapp.com/",
          icon: <SlideshowIcon />,
        },
        {
          info: "Github",
          link: "https://github.com/junghong91/airbnb-clone",
          icon: <GitHubIcon />,
        },
      ],
    },

    // Project 4.
    {
      tag: "React",
      caption: "Creating a COVID-19 Tracker/Stats Application.",
      skills: ["React", "React Hooks", "Charts.JS", "Material UI"],
      image: [
        "https://cdn.pixabay.com/photo/2020/03/19/21/35/covid-4948866_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/10/15/08/53/virus-5656362_1280.jpg",
      ],
      title: "COVID-19 Tracker/Stats Application",
      description:
        "Creating a COVID-19 Tracker/Stats Application. Using React with the addition of Charts.js, Material UI, and many different modules",
      links: [
        {
          info: "Detail",
          link: "https://covid19-tracker-by-hong.netlify.app/",
          icon: <SlideshowIcon />,
        },
        {
          info: "Github",
          link: "https://github.com/junghong91/COVID-19-Tracker",
          icon: <GitHubIcon />,
        },
      ],
    },

    // Project 5
    {
      tag: "React",
      caption: "Creating a Tetris game using React Hooks",
      skills: ["React", "React Hooks", "Styled Components"],
      image: [
        "https://cdn.pixabay.com/photo/2015/05/02/09/37/tetris-749690_1280.jpg",
        "https://cdn.pixabay.com/photo/2014/04/03/00/29/tetris-308443_1280.png",
      ],
      title: "Tetris game with React Hooks",
      description:
        "Creating a Tetris game with React Hooks. Build Tetris from scratch using hooks like useState, useEffect, useCallback and custom hooks. Styling is done with Styled Components.",
      links: [
        {
          info: "Detail",
          link: "https://covid19-tracker-by-hong.netlify.app/",
          icon: <SlideshowIcon />,
        },
        {
          info: "Github",
          link: "https://github.com/junghong91/COVID-19-Tracker",
          icon: <GitHubIcon />,
        },
      ],
    },

    // Project 6
    {
      tag: "React",
      caption: "Building a Hotel Reservation Website using React",
      skills: ["React", "React Hooks", "Local Storage", "ES6"],
      image: [
        "https://cdn.pixabay.com/photo/2015/09/02/12/40/swimming-pool-918593_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_1280.jpg",
      ],
      title: "Hotel Reservation Website",
      description:
        "Building a beach resort website project. The project uses React router for routing, React context API for state management, Contentful headless CMS for data management, and Netlify to host the application.",
      links: [
        {
          info: "Detail",
          link: "https://react-resort-app-by-hong.netlify.app/",
          icon: <SlideshowIcon />,
        },
        {
          info: "Github",
          link: "https://github.com/junghong91/HotelReservation",
          icon: <GitHubIcon />,
        },
      ],
    },

    // Project 7
    {
      tag: "Javascript",
      caption:
        "Build a Realtime Multiplayer Game with NodeJS, SocketIO, Canvas, Gulp and ES6",
      skills: ["Javascript", "SocketIO", "Canvas", "Gulp", "ES6"],
      image: [
        "https://cdn.pixabay.com/photo/2016/02/24/15/27/paint-1220088_1280.jpg",
      ],
      title: "Realtime Drawing Game",
      description:
        "Cloneing the game 'Catch Mind' where players paint a random word and get points by guessing what the other ones are playing",
      links: [
        {
          info: "Detail",
          link: "https://guess-hong-mind.herokuapp.com/",
          icon: <SlideshowIcon />,
        },
        {
          info: "Github",
          link: "https://github.com/junghong91/guess-mine",
          icon: <GitHubIcon />,
        },
      ],
    },
  ],
};

export default resumeData;
