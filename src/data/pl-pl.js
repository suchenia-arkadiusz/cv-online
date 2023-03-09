import {getAgeInPolish} from "../common/helpers.js";

export const plPl = {
  aboutHeader: "O mnie",
  experienceHeader: "Doświadczenie zawodowe",
  about: `Cześć! Jestem Arek, mam ${getAgeInPolish()} i jestem aktywnym zawodowo programistą od ${new Date().getFullYear() - 2015} lat. Swoją przygodę z programowaniem zacząłem w wieku 15 lat i do dziś rozwijam się w tym kierunku. Od wielu lat programuję w języku JAVA, jednak ostatnio zagłębiam się w NodeJS oraz React.`,
  timeline: [
    {
      year: "2020",
      startedAt: "2020-01-01",
      finishedAt: "nadal",
      company: "Transition Technologies PSC",
      position: "Starszy specjalista JAVA, Tech lead, Group Leader",
      description: "Prowadzenie zespołu programistów na projektach związanych z technologią Azure oraz ThingWorx." +
        " Utrzymywanie oraz wdrażanie nowych rozwiązań w aplikacji opartej na mikroserwisach w technologii React" +
        " oraz NodeJS z wykorzystaniem języków JavaScript oraz TypeScript"
    },
    {
      year: "2019",
      startedAt: "2019-04-08",
      finishedAt: "2019-11-15",
      company: "Silevis Software",
      position: "Specjalista JAVA",
      description: "Projektowanie i implementacja aplikacji w języku JAVA z wykorzystaniem Spring Framework w" +
        " architekturze mikroserwisowej w środowisku Docker. Implementacja Event Sourcing"
    },
    {
      year: "2016",
      startedAt: "2016-07-04",
      finishedAt: "2019-06-30",
      company: "Transition Technologies PSC",
      position: "Specjalista JAVA",
      description: "Rozszerzanie aplikacji z dziedziny PLM o potrzeby klienta, utrzymywanie kodu. Implementacja" +
        " rozwiązań IoT opartych o platformę ThingWorx. Prowadzenie wewnętrznych szkoleń (JAVA, ThingWorx) dla" +
        " nowych pracowników. Prowadzenie zajęć z podstaw programowania w języku JAVA w partnerskiej szkole średniej"
    },
    {
      year: "2015",
      startedAt: "2015-06-01",
      finishedAt: "2016-06-10",
      company: "Krzysztof Weryszko Need Space",
      position: "Programista UNITY3D/C#",
      description: "Programowanie gier na urządzenia mobilne, testowanie aplikacji, wdrażanie aplikacji na serwery" +
        " Google Play oraz AppStore. Integracja z dostawcami reklam"
    },
    {
      year: "2013",
      startedAt: "2013-10-01",
      finishedAt: "2017-03-21",
      company: "Politechnika Świętokrzyska w Kielcach",
      position: "Student",
      description: "Kierunek Informatyka ze specjalizacją 'Grafika komputerowa'"
    },
    {
      year: "2012",
      startedAt: "2012-01-18",
      finishedAt: "2015-04-21",
      company: "Akademia CISCO",
      position: "Uczeń",
      description: "Poziom CCNA Exploration"
    },
    {
      year: "2009",
      startedAt: "2009-09-01",
      finishedAt: "2013-04-26",
      company: "Zespół Szkół Informatycznych w Kielcach",
      position: "Uczeń",
      description: "Kierunek Informatyka"
    }
  ]
}
