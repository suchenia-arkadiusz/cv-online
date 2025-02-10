import React, {createContext, useState} from "react";
import {plPL} from "../data/pl-pl.js";
import {enUS} from "../data/en-us.js";

export const LanguageContext = createContext()

export const LanguageController = ({children}) => {
  const [isEnglish, setIsEnglish] = useState(true)
  const [data, setData] = useState(enUS)

  const localizedData = [
    {
      key: "pl-pl",
      data: plPL
    },
    {
      key: "en-us",
      data: enUS
    }
  ]

  const setLanguage = (languageCode) => {
    setData(localizedData.find(element => element.key === languageCode).data)
  }

  const state = {
    data,
    setLanguage,
    isEnglish,
    setIsEnglish,
  }

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  )
}

