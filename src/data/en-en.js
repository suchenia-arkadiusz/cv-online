import {getAge} from "../common/helpers.js";
import asWikiIcon from "../assets/projects/as-wiki/icon.svg";
import asWikiFirstPicture from "../assets/projects/as-wiki/as-wiki-1.png";
import asWikiSecondPicture from "../assets/projects/as-wiki/as-wiki-2.png";
import cvIcon from "../assets/projects/cv-online/icon.svg";

export const enEn = {
  greetings: ["Hello", "I'm Arek", "Fullstack Software Developer"],
  aboutHeader: "About me",
  experienceHeader: "Professional Experience",
  educationHeader: "Education",
  skillsHeader: "Skills",
  about: [
    `Hi! My name is Arek and I'm ${getAge()} years old. I'm a software developer since 2015. I took my first steps in programming at the age of 15, and I'm still developing in this direction today. I've been programming in JAVA for many years, but lately I've been delving into NodeJS and React.`,
    "The basis of a programmer's work should be, first of all, good organization of working time. During my work I" +
    " make every effort to organize my time so that I can perform my tasks in the shortest possible time and with" +
    " the best possible effect. In my opinion, every application must have at least unit tests so that we can be" +
    " sure that it solves the client's business problems correctly. After working hours I develop my personal" +
    " projects and learn new technologies."
  ],
  experienceTimeline: [
    {
      startedAt: "2020-01-01",
      finishedAt: "",
      company: "Transition Technologies PSC",
      position: "Senior Fullstack Software Developer, Tech lead, Group Leader",
      description: "Leading a team of developers on Azure and ThigWorx projects. Maintaining and implementation new" +
        " features in microservices-based application in ReactJS and NodeJS technologies using JavaScript and" +
        " TypeScript languages. Maintainig CI/CD pipelines using TeamCity, GitLab pipelines and GitHub Actions. Work" +
        " with SQL (PostgreSQL, SQLServer) and NoSQL (MongoDB) databases. Integration microservices with REST and" +
        " Kafka. Building Docker images. Integrate application with ChatGPT and the internal knowledge base. Build" +
        " a custom solution to retrieve data from the devices and put them into the Azure Cloud. Access through the" +
        " Azure API Management and Azure Functions. Data is transfered by Azure Service Bus. Analyze data using" +
        " Azure Stream Analytics (aggregate data (SUM, AVG, MIN, MAX, etc.) by time windows)."
    },
    {
      startedAt: "2019-04-08",
      finishedAt: "2019-11-15",
      company: "Silevis Software",
      position: "Fullstack Software Developer",
      description: "Microservices-based JAVA application design and development using Spring Framework and Event" +
        " Sourcing. Implementation client side application using JavaScript and Angular Framework."
    },
    {
      startedAt: "2016-07-04",
      finishedAt: "2019-06-30",
      company: "Transition Technologies PSC",
      position: "Fullstack Software Developer",
      description: "Maintaining and extending PLM application to meet customer needs using JAVA language." +
        " Implementing IoT solutions using ThigWorx platform using JavaScript language. Conducting internal" +
        " trainings for new coworkers (JAVA, ThingWorx). Create a mobile App using IONIC framework and integrate it" +
        " with ThigWorx platfor. The App stores data localy on the phone or tablet and sends it to ThingWorx after" +
        " connects to internet. Teaching JAVA programming basics at a partner high school."
    },
    {
      startedAt: "2015-06-01",
      finishedAt: "2016-06-10",
      company: "Krzysztof Weryszko Need Space",
      position: "UNITY3D/C# Software Developer",
      description: "Mobile game development, testing and deploying games on Google Play and AppStore. Integration" +
        " with ads providers."
    }
  ],
  educationTimeline: [
    {
      startedAt: "2024-10-01",
      finishedAt: "",
      school: "Kielce University of Technology",
      degree: "Master of Engineering",
      faculty: "Information Technology Systems"
    },
    {
      startedAt: "2013-10-02",
      finishedAt: "2017-03-21",
      school: "Kielce University of Technology",
      degree: "Bachelor of Engineering",
      faculty: "Computer Graphics"
    }
  ],
  skills: [
    {
      name: "JavaScript",
      level: 4.5
    },
    {
      name: "TypeScript",
      level: 4
    },
    {
      name: "NodeJS",
      level: 4.4
    },
    {
      name: "React",
      level: 4.8
    },
    {
      name: "JAVA",
      level: 3.8
    },
    {
      name: "HTML",
      level: 4.4
    },
    {
      name: "CSS",
      level: 4
    },
    {
      name: "SQL",
      level: 3.5
    },
    {
      name: "NoSQL",
      level: 4
    },
    {
      name: "Docker",
      level: 4.3
    },
    {
      name: "Git",
      level: 4.8
    },
    {
      name: "CI/CD",
      level: 3.7
    },
    {
      name: "English",
      level: 4
    },
    {
      name: "Polish",
      level: 5
    }
  ],
  header: [
    {
      name: "Resume",
      url: "/"
    },
    {
      name: "Projects",
      url: "/projects"
    }
  ],
  goToProjectLabel: "Go To Project Details",
  projects: [
    {
      id: "as-wiki",
      title: "AS Wiki",
      icon: asWikiIcon,
      shortDescription: "Over the years I have been testing various tools to store my notes, documentation of my" +
        " internal projects, etc. I found many interesting tools, as well as many that I didn't like. The solution" +
        " was to create my own system.",
      description: "<p>Over the years I have been testing various tools to store my notes, documentation of my" +
        " internal projects, etc. I found many interesting tools, as well as many that I didn't like. I began to" +
        " notice that even with the interesting ones, there was always something missing, either the formatting of" +
        " the code wasn't right (for me), or the UI in general wasn't very attractive, the navigation left much to" +
        " be desired, or it simply couldn't be run on a private server.</p><p>Then the idea was born to try to write" +
        " your own application that you can run locally and access it from anywhere.</p><p>Main" +
        " features:</p><ul><li>he ability to install locally using Docker</li><li>editing documents" +
        " uding Markdown format</li><li>special styles for source code</li><li>ability to group into projects" +
        " </li><li>possibility to create subpages</li><li>the ability to assign permissions to a specific site or" +
        " project - if a site does not have permissions, then permissions are searched upward to the parent, then to" +
        " the parent of the parent, and so on up to the project</li><li>support for multiple users and user groups" +
        "</li></ul><p>Of course, this solution is not perfect, it has its errors, shortcomings, but for my needs it" +
        " is 100% sufficient.</p><h2>Technologies used in the project</h2><ul><li>React</li><li>NodeJS</li><li>TypeScript" +
        " i JavaScript</li><li>PostgreSQL</li><li>GitHub Actions</li><li>Docker</li></ul><p>Of course, not" +
        " everything I created myself from scratch, for some things like editing and displaying documents in" +
        " Markdown format, connecting to the database, REST API, encrypting passwords, etc., I used ready-made," +
        " proven libraries that are free.</p><h2>Link to the repository:</h2><a" +
        " href='https://github.com/suchenia-arkadiusz/as-wiki'" +
        " target='_blank'>https://github.com/suchenia-arkadiusz/as-wiki</a><h2>Screenshots</h2><div" +
        " id='images-container'><a href=" + asWikiFirstPicture + " target='_blank'><img src=" + asWikiFirstPicture + " alt='AS" +
        " Wiki screenshot' /></a><a href=" + asWikiSecondPicture + " target='_blank'><img src=" + asWikiSecondPicture +
        " alt='AS Wiki screenshot' /></a></div>"
    },{
      id: "cv-online",
      title: "CV",
      icon: cvIcon,
      shortDescription: "The project was created to share my current work experience and as my business card. While" +
        " I know that it is standard to have your 'paper' resume to send to a recruiter, I thought this solution" +
        " could work as an 'early access' of my resume.",
      description: "<p>The project was created to share my current work experience and as my business card. While I" +
        " know that it is standard to have your 'paper' resume to send to a recruiter, I thought that this solution" +
        " could work well as an 'early access' of my resume. Such a solution carries one thing, but important to me" +
        " - it can be easily and quickly updated, so that the information contained here, will always be up to date." +
        "</p><h2>Technologies used in the project</h2><ul><li>React</li><li>JavaScript</li></ul><h2>Link to the" +
        " repository:</h2><a href='https://github.com/suchenia-arkadiusz/cv-online'" +
        " target='_blank'>https://github.com/suchenia-arkadiusz/cv-online</a><h2>Zrzuty ekranu</h2><div" +
        " id='images-container'><a href=" + asWikiFirstPicture + " target='_blank'><img src=" + asWikiFirstPicture + " alt='AS" +
        " Wiki screenshot' /></a><a href=" + asWikiSecondPicture + " target='_blank'><img src=" + asWikiSecondPicture +
        " alt='AS Wiki screenshot' /></a></div>"
    }
  ]
}
