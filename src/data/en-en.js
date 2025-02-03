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
      shortDescription: "Przez wiele lat testowałem różne narzędzia do przechowywania swoich notatek," +
        " dokumentacji moich wewnętrznych projektów, itp. Znalazłem wiele ciekawych narzędzi, jak i wiele takich," +
        " które nie przypadły mi do gustu. Zacząłem zauważać, że nawet przy tych ciekawych, zawsze czegoś mi" +
        " brakowało, albo formatowanie kodu nie było odpowiednie (dla mnie), albo ogólnie UI był niezbyt atrakcyjny," +
        " nawigacja pozostawiała wiele do życzenia, albo po prostu nie dało się tego uruchomić na prywatnym" +
        " serwerze.",
      description: "<p>Przez wiele lat testowałem różne narzędzia do przechowywania swoich notatek," +
        " dokumentacji moich wewnętrznych projektów, itp. Znalazłem wiele ciekawych narzędzi, jak i wiele takich," +
        " które nie przypadły mi do gustu. Zacząłem zauważać, że nawet przy tych ciekawych, zawsze czegoś mi" +
        " brakowało, albo formatowanie kodu nie było odpowiednie (dla mnie), albo ogólnie UI był niezbyt atrakcyjny," +
        " nawigacja pozostawiała wiele do życzenia, albo po prostu nie dało się tego uruchomić na prywatnym" +
        " serwerze.</p><p>Wtedy narodził się pomysł, aby spróbować napisać własną aplikację, którą będzie można" +
        " uruchomić lokalnie i mieć do niej dostęp zewsząd.</p><p>Główne cechy:</p><ul><li>możliwość lokalnej" +
        " instalacji" +
        " za pomocą Dockera</li><li>edycja dokumentów za pomocą formatu Markdown</li><li>specjalne style dla kodu" +
        " źródłowego</li><li>możliwość grupowania w projekty</li><li>możliwość tworzenia" +
        " podstron</li><li>możliwość nadawania uprawnień do konkretnej strony lub projektu - jeśli strona nie" +
        " posiada uprawnień, wtedy są wyszukiwane uprawnienia w górę do rodzica, potem do rodzica rodzica itd. aż do" +
        " projektu</li><li>obsługa wielu użytkowników oraz grup użytkowników</li></ul><p>Oczywiście to rozwiązanie" +
        " nie jest idealne, ma swoje błędy, niedociągnięcia, ale na moje potrzeby w 100%" +
        " wystarcza.</p><h2>Technologie użyte w projekcie</h2><ul><li>React</li><li>NodeJS</li><li>TypeScript" +
        " i JavaScript</li><li>PostgreSQL</li><li>GitHub Actions</li><li>Docker</li></ul><p>Oczywiście nie wszystko" +
        " tworzyłem sam od zera, do niektórych rzeczy jak edycja oraz wyświetlanie dokumentów w formacie Markdown," +
        " połączenie z bazą danych, REST API, szyfrowanie haseł itp. używałem gotowych, sprawdzonych bibliotek," +
        " które są darmowe.</p><h2>Link do repozytorium:</h2><a href='https://github.com/suchenia-arkadiusz/as-wiki'" +
        " target='_blank'>https://github.com/suchenia-arkadiusz/as-wiki</a><h2>Zrzuty ekranu</h2><div" +
        " id='images-container'><a href=" + asWikiFirstPicture + " target='_blank'><img src=" + asWikiFirstPicture + " alt='AS" +
        " Wiki screenshot' /></a><a href=" + asWikiSecondPicture + " target='_blank'><img src=" + asWikiSecondPicture +
        " alt='AS Wiki screenshot' /></a></div>"
    },{
      id: "cv-online",
      title: "CV",
      icon: cvIcon,
      shortDescription: "Projekt został stworzony w celu udostępnienia mojego aktualnego doświadczenia zawodowego oraz" +
        " jako moja wizytówka. Wiem, że standardem jest posiadanie swojego 'papierowego' CV, które można wysłać do" +
        " osoby rekrutującej, natomiast pomyślałem, że takie rozwiązanie może się sprawdzić jako 'early access'" +
        " mojego CV. Takie rozwiązanie niesie ze sobą jedną, ale ważną dla mnie rzecz - może być łatwo i szybko" +
        " aktualizowane, dzięki czemu zawarte tutaj informacje, zawsze będą aktualne.",
      description: "<p>Projekt został stworzony w celu udostępnienia mojego aktualnego doświadczenia zawodowego oraz" +
        " jako moja wizytówka. Wiem, że standardem jest posiadanie swojego 'papierowego' CV, które można wysłać do" +
        " osoby rekrutującej, natomiast pomyślałem, że takie rozwiązanie może się sprawdzić jako 'early access'" +
        " mojego CV. Takie rozwiązanie niesie ze sobą jedną, ale ważną dla mnie rzecz - może być łatwo i szybko" +
        " aktualizowane, dzięki czemu zawarte tutaj informacje, zawsze będą aktualne.</p><h2>Technologie użyte w" +
        " projekcie</h2><ul><li>React</li><li>JavaScript</li></ul><h2>Link do repozytorium:</h2>" +
        "<a href='https://github.com/suchenia-arkadiusz/cv-online'" +
        " target='_blank'>https://github.com/suchenia-arkadiusz/cv-online</a><h2>Zrzuty ekranu</h2><div" +
        " id='images-container'><a href=" + asWikiFirstPicture + " target='_blank'><img src=" + asWikiFirstPicture + " alt='AS" +
        " Wiki screenshot' /></a><a href=" + asWikiSecondPicture + " target='_blank'><img src=" + asWikiSecondPicture +
        " alt='AS Wiki screenshot' /></a></div>"
    }
  ]
}
