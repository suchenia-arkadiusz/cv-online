import {getAgeInPolish} from "../common/helpers.js";

export const plPl = {
  greetings: ["Cześć", "Jestem Arek", "Fullstack Software Developer"],
  aboutHeader: "O mnie",
  experienceHeader: "Doświadczenie zawodowe",
  educationHeader: "Edukacja",
  skillsHeader: "Umiejętności",
  about: [
    `Cześć! Jestem Arek, mam ${getAgeInPolish()} i jestem aktywnym zawodowo programistą od ${new Date().getFullYear() - 2015} lat. Swoją przygodę z programowaniem zacząłem w wieku 15 lat i do dziś rozwijam się w tym kierunku. Od wielu lat programuję w języku JAVA, jednak ostatnio zagłębiam się w NodeJS oraz React.`,
    "Podstawą pracy programisty powinna być przede wszystkim dobra organizacja czasu pracy. Podczas swojej pracy" +
    " dokładam wszelkich starań do zorganizowania swojego czasu tak, aby wykonywać swoje zadania w jak najkrótszym" +
    " czasie oraz z jak najlepszą jakością. Moim zdaniem każda aplikacja musi mieć napisane conajmniej testy" +
    " jednostkowe, wtedy możemy mieć pewność, że rozwiązuje ona problemy biznesowe w poprawny sposób. Po godzinach" +
    " swojej pracy rozwijam swoje prywatne projekty oraz uczę się nowych technologii."
  ],
  experienceTimeline: [
    {
      startedAt: "2020-01-01",
      finishedAt: "",
      company: "Transition Technologies PSC",
      position: "Starszy Programista Fullstack, Tech lead, Group Leader",
      description: "Prowadzenie zespołu programistów na projektach związanych z technologią Azure oraz ThingWorx." +
        " Utrzymywanie oraz wdrażanie nowych rozwiązań w aplikacji opartej na mikroserwisach w technologii ReactJS" +
        " oraz NodeJS z wykorzystaniem języków JavaScript oraz TypeScript. Utrzymywanie pipeline'ów CI/CD z" +
        " wykorzystaniem TeamCity, GitLab, Jenkins oraz GitHub Actions. Praca z bazami danych SQL (PostgreSQL," +
        " SQLServer) oraz NoSQL (MongoDB). Integracja mikroserwisów poprzez REST API oraz Kafkę. Budowanie obrazów" +
        " Docker. Integrowanie aplikacji z ChatGPT oraz wewnątrzfirmową bazą wiedzy. Budowanie rozwiązania do" +
        " pobierania danych z urządzeń i umieszczenia ich w chmurze Azure. Dostęp do aplikacji poprzez Azure API" +
        " Management oraz Azure Functions, przesyłanie danych poprzez Azure Service Bus, analiza danych z" +
        " wykorzystaniem Azure Stream Analytics (agregacja danych (SUM, AVG, MIN, MAX, itp.) względem różnych okien" +
        " czasowych)."
    },
    {
      startedAt: "2019-04-08",
      finishedAt: "2019-11-15",
      company: "Silevis Software",
      position: "Programista Fullstack",
      description: "Projektowanie i implementacja aplikacji w języku JAVA z wykorzystaniem Spring Framework oraz" +
        " Event Sourcing. Implementacja klienta z wykorzystaniem JavaScript oraz Angular."
    },
    {
      startedAt: "2016-07-04",
      finishedAt: "2019-06-30",
      company: "Transition Technologies PSC",
      position: "Programista Fullstack",
      description: "Utrzymywanie orazozszerzanie aplikacji z dziedziny PLM o potrzeby klienta z wykorzystaniem" +
        " języka JAVA. Implementacja rozwiązań IoT na platformie ThingWorx z wykorzystaniem JavaScript. Prowadzenie" +
        " wewnętrznych szkoleń dla nowych pracowników (JAVA, ThingWorx). Tworzenie aplikacji mobilnych wykorzystując" +
        " framework IONIC oraz integracja z platformą ThingWorx. Aplikacja przechowywała dane lokalnie i wysyłała je" +
        " do platformy po połączeniu z siecią. Prowadzenie zajęć z programowania w języku JAVA w partnerskiej szkole" +
        " średniej."
    },
    {
      startedAt: "2015-06-01",
      finishedAt: "2016-06-10",
      company: "Krzysztof Weryszko Need Space",
      position: "Programista UNITY3D/C#",
      description: "Programowanie gier na urządzenia mobilne, testowanie aplikacji, wdrażanie aplikacji na serwery" +
        " Google Play oraz AppStore. Integracja z dostawcami reklam."
    }
  ],
  educationTimeline: [
    {
      startedAt: "2024-10-01",
      finishedAt: "",
      school: "Politechnika Świętokrzyska w Kielcach",
      degree: "Magister",
      faculty: "Systemy Informatyczne"
    },
    {
      startedAt: "2013-10-02",
      finishedAt: "2017-03-21",
      school: "Politechnika Świętokrzyska w Kielcach",
      degree: "Inżynier",
      faculty: "Grafika Komputerowa"
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
      level: 4.5
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
      name: "Język angielski",
      level: 4
    },
    {
      name: "Język polski",
      level: 5
    }
  ],
  header: [
    "CV", "Projekty"
  ]
}
