export const isNotBlank = (str) => {
  const regex = /\S+/
  return !regex.test(str)
}
