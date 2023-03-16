import {getAge} from "../common/helpers.js";

export const enEn = {
  aboutHeader: "About me",
  experienceHeader: "Professional Experience",
  about: `Hi! My name is Arek and I'm ${getAge()} years old. I'm a software developer since 2015. I took my first steps in programming at the age of 15, and I'm still developing in this direction today. I've been programming in JAVA for many years, but lately I've been delving into NodeJS and React.`,
  timeline: [
    {
      year: "2020",
      startedAt: "2020-01-01",
      finishedAt: "now",
      company: "Transition Technologies PSC",
      position: "Senior JAVA Software Developer, Tech lead, Group Leader",
      description: "Leading a team of developers on Azure and ThingWorx projects. Maintaining and implementation of" +
        " new features in microservices-based application in React and NodeJS technologies using JavaScript and" +
        " TypeScript languages"
    },
    {
      year: "2019",
      startedAt: "2019-04-08",
      finishedAt: "2019-11-15",
      company: "Silevis Software",
      position: "JAVA Software Developer",
      description: "Microservices-based JAVA application design and development using Spring Framework and Event" +
        " Sourcing"
    },
    {
      year: "2016",
      startedAt: "2016-07-04",
      finishedAt: "2019-06-30",
      company: "Transition Technologies PSC",
      position: "JAVA Software Developer",
      description: "Maintaining and extending PLM application to meet customer needs. Implementing IoT solutions" +
        " using ThingWorx platform. Conducting internal trainings for new coworkers (JAVA, ThingWorx). Teaching" +
        " JAVA programming basics at a partner high school"
    },
    {
      year: "2015",
      startedAt: "2015-06-01",
      finishedAt: "2016-06-10",
      company: "Krzysztof Weryszko Need Space",
      position: "UNITY3D/C# Developer",
      description: "Mobile game development, testing and deploying games on the Google Play and AppStore." +
        " Integration with ads providers."
    },
    {
      year: "2013",
      startedAt: "2013-10-01",
      finishedAt: "2017-03-21",
      company: "Kielce University of Technology",
      position: "Student",
      description: "Computer Science with specialization in 'Computer Graphics'"
    },
    {
      year: "2012",
      startedAt: "2012-01-18",
      finishedAt: "2015-04-21",
      company: "CISCO Academy",
      position: "Student",
      description: "CCNA Exploration Level"
    },
    {
      year: "2009",
      startedAt: "2009-09-01",
      finishedAt: "2013-04-26",
      company: "Zespół Szkół Informatycznych w Kielcach",
      position: "Student",
      description: "Computer Science"
    }
  ],
  header: [
    "Resume", "Projects"
  ]
}
