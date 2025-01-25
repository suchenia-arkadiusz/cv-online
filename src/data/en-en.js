import {getAge} from "../common/helpers.js";

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
    "Resume", "Projects"
  ]
}
