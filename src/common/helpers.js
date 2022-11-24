export const getAgeInPolish = () => {
  const age = new Date().getFullYear() - 1993
  const ageText = age % 10 > 1 && age % 10 < 5 ? "lata" : "lat"

  return `${age} ${ageText}`
}
