import {getAgeInPolish} from "../common/helpers.js";

export const data = {
    about: `Cześć! Jestem Arek, mam ${getAgeInPolish()} i jestem aktywnym zawodowo programistą od lat ${new Date().getFullYear() - 2015}. Swoją przygodę z programowaniem zacząłem w wieku 15 lat i do dziś rozwijam się w tym kierunku. Od wielu lat programuję w języku JAVA, jednak ostatnio zagłębiam się w NodeJS oraz React.`,
    timeline: [
        {
            startedAt: "2020-01-01",
            finishedAt: "nadal",
            company: "Transition Technologies PSC Sp. Z o. o.",
            position: "Starszy specjalista JAVA, Techlead, Group Leader",
            description: "Utrzymywanie i rozwijanie aplikacji opartej o architekturę mikroserwisową w językach NodeJS" +
                " oraz React."
        }
    ]
}
