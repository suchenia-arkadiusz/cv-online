import {getAgeInPolish} from "../common/helpers.js";
import asWikiIcon from "../assets/projects/as-wiki/icon.svg";
import asWikiFirstPicture from "../assets/projects/as-wiki/as-wiki-1.png";
import asWikiSecondPicture from "../assets/projects/as-wiki/as-wiki-2.png";
import cvIcon from "../assets/projects/cv-online/icon.svg";

export const plPl = {
  greetings: ["Cześć", "Jestem Arek", "Programista Fullstack"],
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
    {
      name: "CV",
      url: "/"
    },
    {
      name: "Projekty",
      url: "/projects"
    }
  ],
  goToProjectLabel: "Przejdź do szczegółów projektu",
  projects: [
    {
      id: "as-wiki",
      title: "AS Wiki",
      icon: asWikiIcon,
      shortDescription: "Przez wiele lat testowałem różne narzędzia do przechowywania swoich notatek," +
        " dokumentacji moich wewnętrznych projektów, itp. Znalazłem wiele ciekawych narzędzi, jak i wiele takich," +
        " które nie przypadły mi do gustu. Rozwiązaniem było stworzenie własnego systemu.",
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
        " które są darmowe.</p><h2>Link do repozytorium:</h2><a" +
        " href='https://github.com/suchenia-arkadiusz/as-wiki'" +
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
        " mojego CV.",
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
