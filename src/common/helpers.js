export const getAge = () => {
  return new Date().getFullYear() - 1993
}

export const getAgeInPolish = () => {
  const age = getAge()
  const ageText = age % 10 > 1 && age % 10 < 5 ? "lata" : "lat"

  return `${age} ${ageText}`
}
