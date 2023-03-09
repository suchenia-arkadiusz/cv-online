import React, {createContext, useState} from "react";
import {plPl} from "../data/pl-pl.js";
import {enEn} from "../data/en-en.js";

export const LanguageContext = createContext()

export const LanguageController = ({children}) => {
  const [data, setData] = useState(plPl)

  const localizedData = [
    {
      key: "pl-pl",
      data: plPl
    },
    {
      key: "en-en",
      data: enEn
    }
  ]

  const setLanguage = (languageCode) => {
    setData(localizedData.find(element => element.key === languageCode).data)
  }

  const state = {
    data,
    setLanguage
  }

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  )
}

