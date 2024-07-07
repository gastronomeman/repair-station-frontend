export const isNotBlank = (str) => {
  const regex = /\S+/
  return !regex.test(str)
}

export const checkPassword = (str) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/
  return !regex.test(str)
}
